import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='email address' />
                <input type="text" placeholder='street' />
                <div className="multi-fields">
                    <input type="text" placeholder='city' />
                    <input type="text" placeholder='state' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='zipcode' />
                    <input type="text" placeholder='country' />
                </div>
                <input type="text" placeholder='phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery fee</p>
                            <p>₹{getTotalCartAmount() === 0 ? 0 : 40}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b>
                        </div>
                    </div>
                    <button>Proceed to payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
