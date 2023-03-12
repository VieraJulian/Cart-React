import React from "react";
import { data } from "../data";
import { toast } from 'react-toastify';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {

    const alert = () => {
        toast.success('Producto agregado!', {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const onAddProduct = (product) => {

        if (allProducts.find(item => item.id === product.id)) {

            const products = allProducts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)

            setTotal(total + product.price)
            setCountProducts(countProducts + product.quantity)
            alert()
            return setAllProducts([...products])
        }

        setTotal(total + product.price * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
        alert()
    }

    return (
        <div className="container-items">
            {data.map(product => (
                <div className="item" key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className="info-product">
                        <h2>{product.nameProduct}</h2>
                        <p className="price">${product.price}</p>
                        <button className="btn-add-cart" onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
    );
}