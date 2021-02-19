import React, { useState }  from 'react';
import axios from 'axios'

// ---- componentes ---------
import Catalogo from './Catalogo'
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Home = () => {
    
    const [error, setError] = useState(false);
    // ------------ PRODUCTS -----------------------------
    const [products, setProducts] = useState([]);
    const [productsResult, setProductsResult] = useState([]);
    const [input, setInput] = useState("");

    // ----------- PAGINATION -----------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirsProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirsProduct,
        indexOfLastProduct
    );
    const pagination = (pageNumber) => setCurrentPage(pageNumber);


    const onSearch = (product) => {
        setInput(product);
        console.log("soy product---->", product)
        axios.get(`http://localhost:3001/api/search?q=${product}`)
          .then((p) => {
              console.log("soy la info----->", p)
            setProducts(p.data);
            setProductsResult(p.data);
            setError(false);

          })
          .catch((err) => {
            console.log("soy el error----------->>>",err);
            setError(true);
          });
    };
    return(
        <>
            <Header />
            <SearchBar onSearch={onSearch}/>
            <Catalogo  
            products={currentProducts}
            //addToCart={addToCart}
            error={error}/>
            <Pagination 
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            pagination={pagination}
            key={"#"}
            />
            <Footer /> 
        </>
    )
}

export default Home;