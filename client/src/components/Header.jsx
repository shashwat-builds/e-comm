import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from "react-redux"
import { cartList } from "../redux/action";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
      const dispatch = useDispatch();
      const result = useSelector(state => state.cartData)
      useEffect(()=>{
        dispatch(cartList())
      },[])
    console.warn(result);
    return (<div className="header">
      <Link to="/"><h1 className='logo'>Ecommerce</h1></Link>
      <Link to="/cart">
        <div className="cart-div">
            <span id="zero">{result.length}</span>
            <FontAwesomeIcon icon={faCartShopping} className='ima' />
        </div>
        </Link>
    </div>)
}

export default Header