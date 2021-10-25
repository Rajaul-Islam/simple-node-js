import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const carts = props.cart;
    console.log(carts)

    let totalQuentity=0;
    for(const singleProduct of carts ){
        singleProduct.quentity=!singleProduct.quentity?1:singleProduct.quentity;
        totalQuentity=totalQuentity+ singleProduct.quentity;
        console.log(totalQuentity)
    }

    const total = carts.reduce((prevoius, product) => prevoius + product.price*product.quentity, 0)
    const totalShipping = carts.reduce((prevoius, product) => prevoius + product.shipping*product.quentity, 0)
    const totalTex = (total + totalShipping) * .10
    // console.log(total, totalShipping, totalTex)
    const totalPrice=total+totalShipping+totalTex;
 console.log(props.children)
 console.log(props)
    // let total=0;
    // for(const cart of carts){
    //     total=total+cart.price;
    // }
    return (
        <div className="cart">
            <h1>Cart Contariner</h1>
            <div className='cart-items'>
                <p>Total Items:{totalQuentity}</p>
                <p>Price:{total.toFixed(2)}$</p>
                <p>Shipping:{totalShipping.toFixed(2)}$</p>
                <p>Tex:{totalTex.toFixed(2)}$</p>
            </div>
            <p>Total Price:{totalPrice.toFixed(3)} </p>
            {props.children}
        </div>
    );
};

export default Cart;