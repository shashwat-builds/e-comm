import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { productList } from "../redux/productAction";
import { cartList } from "../redux/action";
import "../App.css"
function Cart() {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.productData)
    const cartData = useSelector(state => state.cartData)
    useEffect(() => {
        dispatch(productList());
        dispatch(cartList());
    }, [])
    const cartDetails = productData
        .filter(product => cartData.includes(product.id)) // Filter products in the cart
        .map(product => {
            const quantity = cartData.filter(id => id === product.id).length; // Count occurrences of product ID
            return {
                ...product,
                quantity,
                amount: product.price * quantity // Calculate total amount for the product
            };
        });
    const totalAmount = cartDetails.reduce((total, item) => total + item.amount, 0);
    return (
        <div className="cart-back">
            <Link to="/" className='back-button'>← Back to Products</Link>
            <h1>Cart Page</h1>
            <div className="cart-page-container">
                <table className="cart-table">
                    <thead><tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Amount</td>
                    </tr></thead>
                    <tbody>
                        {cartDetails.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>${item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                
            </div>
            <button className="checkout-button">
                    Checkout - $<span id="total-amount">{totalAmount.toFixed(2)}</span>
                </button>
        </div>
    )
}

export default Cart
