import { React, useState } from "react"
// import { Header } from "./components/Header"
// import { ProductList } from "./components/productList"
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { Home } from "./components/Home";

function App() {
  // // Los productos del carrito
  // const [allProducts, setAllProducts] = useState([]);
  // // Precio total del carrito
  // const [total, setTotal] = useState(0);
  // // Cantidad total de productos en el carrito
  // const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Header
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
        setCountProducts={setCountProducts} /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
