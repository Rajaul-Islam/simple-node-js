import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviweItem from '../ReviewItem/ReviweItem';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    console.log(cart.length)
    const handelRemove =key=> {
         const newCart=cart.filter(product=>product.key!==key);
         setCart(newCart);
         removeFromDb(key);
         
    }
     const history=useHistory();
    const handelPlaceOrder=()=>{
        history.push('/shipping')
        // setCart([])
        // clearTheCart();
    }
    return (
        <div className='item-container'>
            <div>
                {
                    cart.map(product => <ReviweItem
                        product={product}
                        key={product.key}
                        handelRemove={handelRemove}
                    ></ReviweItem>)
                }
            </div>
            <div>
                <div>
                    <Cart cart={cart}>
                       <button onClick={handelPlaceOrder} className='btn'>Proceed To shippign</button> 
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;