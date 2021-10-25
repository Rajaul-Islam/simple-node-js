import React from 'react';

const ReviweItem = (props) => {
    const {name,price,quantity,key}=props.product;
    console.log(props.product);

    return (
        <div>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{quantity}</p>
            <button onClick={()=>props.handelRemove(key)} className='btn'>Remove</button>
        </div>
    );
};

export default ReviweItem;