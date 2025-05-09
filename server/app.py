from flask import Flask,jsonify
from flask import request
from flask_cors import CORS
import redis


from models.product import Product,db

app=Flask(__name__)
app.config.from_object('config');
# Connect to Redis
r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)

CORS(app)
db.init_app(app);

@app.route("/")
def home():
    return("backend is working");

@app.route("/products", methods=['GET'])
def get_products():
    products=Product.query.all();
    return jsonify([{
        'id':p.id,
        'name':p.name,
        'price':p.price,
        'description':p.description,
        'photo':p.photo
    }for p in products
    ])


@app.route("/cart",methods=['POST'])
def add_to_cart():
    data=request.json
    user_id='user_123'
    product_id=str(data.get('product_id'))
    quantity=int(data.get('quantity',1))

    cart_key=f"cart:{user_id}"

    current_qty=r.hget(cart_key,product_id)

    if current_qty:
        r.hincrby(cart_key,product_id,quantity)
    
    else:
        r.hset(cart_key,product_id,quantity);

    return jsonify({"message":"Product added to cart"}),200


@app.route('/cart', methods=['GET'])
def get_cart():
    user_id = 'user_123'  # static for now
    cart_key = f"cart:{user_id}"

    cart_items = r.hgetall(cart_key)  # {product_id: qty}

    if not cart_items:
        return jsonify([])

    # Fetch product details from DB
    products = Product.query.filter(Product.id.in_(cart_items.keys())).all()

    result = []
    for p in products:
        result.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'photo':p.photo,
            'quantity': int(cart_items[str(p.id)])
        })

    return jsonify(result)

@app.route("/cart",methods=['DELETE'])
def remove_from_cart():
    data=request.json
    user_id='user_123'
    product_id=str(data.get('product_id'))

    cart_key=f"cart:{user_id}"

    current_qty=r.hget(cart_key,product_id)

    if current_qty:
        current_qty=int(current_qty)
        if current_qty>1:
            r.hincrby(cart_key,product_id,-1)
    
        else:
            r.hdel(cart_key, product_id)

        return jsonify({"message":"Quantity Updated"}),200
    
    else:
        return jsonify({"message":"Item not in cart"}),404

if __name__=='__main__':
    with app.app_context():
        db.create_all() 
    app.run(debug=True)

