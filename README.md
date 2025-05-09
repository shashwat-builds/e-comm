
# 🛒 E-Commerce Application

A full-stack e-commerce application built with **React**, **Redux**, **Redux-Saga**, **Flask**, and **SQLAlchemy**. Users can browse products, add them to a cart, and view the total amount before checking out.

---

## 🚀 Features

### 🌐 Frontend (Client)
- **React** for a dynamic and responsive UI.
- **Redux** for predictable state management.
- **Redux-Saga** to handle side effects (API calls, async logic).
- **React Router** for seamless page navigation.
- Product listing, cart management, and checkout functionality.

### ⚙️ Backend (Server)
- **Flask** as the backend server.
- **SQLAlchemy** for ORM-based database interaction.
- RESTful APIs for product and cart-related operations.
- **Redis** used for efficient cart session management.

---

## 🗂️ Project Structure

### Frontend (`client/`)
```
client/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Displays header with cart details
│   │   ├── Main.jsx             # Displays product list
│   │   ├── Cart.jsx             # Cart page with checkout option
│   ├── redux/
│   │   ├── action.js            # Redux actions
│   │   ├── constant.js          # Action constants
│   │   ├── reducer.js           # Cart reducer
│   │   ├── productReducer.js    # Product reducer
│   │   ├── rootReducer.js       # Combines reducers
│   │   ├── store.js             # Store configuration
│   │   ├── productSaga.js       # Handles product-related side effects
│   │   ├── cartSaga.js          # Handles cart-related side effects
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App-wide styles
│   ├── index.css                # Global styles
│   ├── main.jsx                 # Entry point
├── index.html                   # HTML template
```

### Backend (`server/`)
```
server/
├── models/
│   ├── product.py               # SQLAlchemy model for products
├── app.py                       # Flask application entry point
```

---

## 🛠️ Installation

### Prerequisites
- [Node.js & npm](https://nodejs.org/)
- [Python 3.x](https://www.python.org/)
- [Redis](https://redis.io/)
- [MySQL](https://www.mysql.com/) (or any DB supported by SQLAlchemy)

---

### ⚙️ Setup Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ecommf
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   pip install -r requirements.txt
   ```

4. **Configure the Database**
   - Update DB settings in `server/config.py`
   - Run the backend:
     ```bash
     python app.py
     ```

5. **Seed the Product Table**
   Use the following SQL to insert sample products:
   ```sql
   INSERT INTO products (name, price, description, photo) VALUES
   ('Nike Air Force 1', 109.99, 'Classic basketball style with a modern twist.','https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/h/t/l/-original-imah4zkzwufnzkdm.jpeg?q=90&crop=false'),
   ('Adidas NMD R1', 139.99, 'Urban running shoe with sock-like fit.','https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/h/t/l/-original-imah4zkzwufnzkdm.jpeg?q=90&crop=false'),
   ('Puma Future Rider', 99.99, 'Retro runner with bold color combinations.','https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/h/t/l/-original-imah4zkzwufnzkdm.jpeg?q=90&crop=false'),
   ('New Balance 574', 89.99, 'Everyday comfort and casual style.','https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/h/t/l/-original-imah4zkzwufnzkdm.jpeg?q=90&crop=false');
   ```

6. **Start Redis**
   ```bash
   redis-server
   ```

7. **Run the Frontend**
   ```bash
   cd ../client
   npm run dev
   ```

---

## 📦 Future Improvements
- Payment gateway integration (e.g., Razorpay/Stripe)
- User authentication and order tracking
- Admin panel for product management

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
