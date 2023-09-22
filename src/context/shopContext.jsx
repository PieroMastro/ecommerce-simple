import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((items) => ({ ...items, [itemId]: items[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItem((items) => ({ ...items, [itemId]: items[itemId] - 1 }))
    }

    const contextValue = { cartItem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

    )
}

export default ShopContextProvider