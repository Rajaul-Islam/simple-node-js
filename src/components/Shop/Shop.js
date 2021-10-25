import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([])
    const [cart,setCart]=useCart(products)
    const [pageCount,setPageCount]=useState(0);
    const [page,setPage]=useState(0)
    console.log(cart)
    const size=10;
    const [displayProducts, setDisplayProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products)
                setDisplayProduct(data.products)
                const count=data.count;
                const pageNumber =Math.ceil(count/size);
                setPageCount(pageNumber); 

            })
    }, [page])
    useEffect(() => {
        //loacal storage theke key guloke savcard er modde sotre kora hoyeche **(iekhne function ta 2bar call hobe karon asynchronous er jonno products er data load hobar agei ei function ta call hoye jay. jar karone defendency hisebe products ke add kore deoa hoyeche. thats means products er data load na hole function ki abar call hobe.)
        const savedCart = getStoredCart();
        console.log(savedCart);
        //match key gulor product store korar jonno storeCart variable declar kora hoyeche. jate order deoa product gulo array akare paoa jay
        const storedCart = [];
        // if use kora hoyeche karon jehutu asynchronous er karone product 1st calle load hoy nai. taai conditon deoa hoyeche jodi products length 0 er beshi hoy tahole if er vitore dukbe
        if (products.length) {

            //savedCart ekta object tai for in diye object theke ekta ekta key nea hocche
            for (const key in savedCart) {
                //key hocche object property r savedCart[key] hocche property valu. thats means ekta product koto bar add kroa hoyeche ta janar jonno
                // console.log(key,savedCart[key])
                //unique key diye protita product ke products theke neoa hocche. sekhetre map use kora hocche. addedProduct er modde match key er product ta thakbe
                const addedProduct = products.find(product => product.key === key)
                // console.log(addedProduct);
                // condition diye check kora hoyeche je product taki match korse naki kore nai. jodi mathch kore if er modde dukbe
                if (addedProduct) {
                    //ekti product koybar order kora hoyeche tar value quentity variablee set kora hoyeche
                    const quentity = savedCart[key];
                    //quentity property set kora hoyech product object er modde. and value hisebe quentity set kora hoyeche.
                    addedProduct.quentity = quentity;
                    //key match product soredCart array te push kora hoyeche
                    storedCart.push(addedProduct)
                }


            }
            //setCarte array ta set kore deoa hoyeche. jate Cart object er moddome product guulo show kore
            setCart(storedCart);
        }

    }, [products])

    const handelCart = product => {
        
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest=cart.filter(pd=>pd.key!==product.key)
            exists.quentity=exists.quentity+1;
            newCart=[...rest,product];
        }
        else {
            product.quentity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDb(product.key)

    }

    const handelSearch = (event) => {
        const searchText = event.target.value;
        const matchProuducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(matchProuducts.length)
        setDisplayProduct(matchProuducts);
    }
    return (
        <div>
            <div className="input-div">
                <input onChange={handelSearch} placeholder="Search" type="text" />
            </div>
            <div className='shop'>
                <div>
                    {
                        displayProducts.map(product => <Product key={product.key} handelCart={handelCart} product={product}></Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number=><button
                            className={number==page? 'selected': ''}
                            key={number}
                            onClick={()=>setPage(number)}
                            >{number+1}</button>)
                        }
                    </div>
                </div>
                <div className="card-container">
                    <Cart cart={cart}>
                        <Link to='/review'>  
                        <button className='btn'>Review Cart</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
