import { Header } from "./Header"
import { ProductList } from "./productList"
import { React, useState } from "react"

export function Home() {
    // Los productos del carrito
    const [allProducts, setAllProducts] = useState([]);
    // Precio total del carrito
    const [total, setTotal] = useState(0);
    // Cantidad total de productos en el carrito
    const [countProducts, setCountProducts] = useState(0);

    return (
        <>
            <Header
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />
            <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />
        </>
    )
}