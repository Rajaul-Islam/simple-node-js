import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    console.log(cart.length)
    useEffect(() => {
        const saveCart = getStoredCart();
        console.log(saveCart);
        const sotredCart = [];
        for (const key in saveCart) {
            const addedProduct = products.find(product => product.key === key);
            console.log(addedProduct);
            if (addedProduct) {
                const quentity = saveCart[key];
                addedProduct.quentity = quentity;
                sotredCart.push(addedProduct)

            }

        }
        setCart(sotredCart);

    }, [products])
    return [cart,setCart];

}
export default useCart;