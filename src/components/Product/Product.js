import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const { img, name, price, category,star } = props.product

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                
                <h3>{name}</h3>
                <h4>price:{price}</h4>
                <p><small>Catagory:{category}</small></p>
                <Rating initialRating={star} emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color" readonly>

                </Rating>
                <br />
                <button onClick={() => props.handelCart(props.product)} className='btn'>{element}Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;