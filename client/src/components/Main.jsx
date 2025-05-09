import { addToCart, cartList, removeFromCart } from "../redux/action"
import { useDispatch } from "react-redux"
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import '../App.css'
import { useEffect } from "react";


function Main() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData)
  useEffect(()=>{
    dispatch(productList());
    dispatch(cartList());
  },[])
  console.warn("data in main component from saga", data)
  
  return (
    <div>
      <div className="product-container">
        {data.map((item) => <div className="product-item" key={item.id}>
          <img src={item.photo} alt="" height="400"/>
          <div className="item-name">{item.name}</div>
          <div className="item-price"><strong>{item.price}$</strong></div>
          <div className="item-description">{item.description}</div>
          <button onClick={() => { dispatch(removeFromCart(item)) }}>-</button>
          <button onClick={() => { dispatch(addToCart(item.id)) }}>+</button>
        </div>)
        }
      </div>

    </div>
  );
}

export default Main
