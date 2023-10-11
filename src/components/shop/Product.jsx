import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
    const { id, productName, price, productImg } = props.data
    const { addToCart } = useContext(ShopContext)

    return (
        <>
            <div className="product">
                <img src={productImg} />
                <div className="description">
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                </div>
                <button className="addToCartBttn" onClick={() => addToCart(id)} >Agregar al Carrito</button>
            </div>
        </>
    )

}

export default Product;