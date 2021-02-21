import React, { useState }  from 'react';
import axios from 'axios'

// ---- componentes ---------
import Catalogo from './Catalogo'
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Filter from './Filter';

const Home = () => {

  
    
  // ------------ ERRORS -----------------------------//
    const [error, setError] = useState(false);
    // ------------ PRODUCTS -----------------------------//
    const [products, setProducts] = useState([]);
    const [productsResult, setProductsResult] = useState([]);
    const [input, setInput] = useState("");

    // ----------- PAGINATION -----------------------------//
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    const indexLastProduct = currentPage * productsPerPage;
    const indexFirtsProduct = indexLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexFirtsProduct,
        indexLastProduct
    );
    const pagination = (pageNumber) => setCurrentPage(pageNumber);

    // ----- SEARCHBAR ------------------------------------------//
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

    // ----------- FILTRO -------------------------------//
    const [condition, setCondition] = useState("");
    const [sort, setSort] = useState("");
    
    const sortProducts = (event) => {
      const sort = event.target.value;
      setSort(sort);
      setProducts(
        products.slice().sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : 
            a.id > b.id
            ? 1
            : -1
        )
      );
    };

    const filterProducts = (event) => {
      let productCondition = event.target.value;
  
      if (productCondition === "Nuevo" || productCondition === "Usado") {
        setCondition(productCondition);
        setProducts(
          productsResult.filter(
            (product) => product.condition.indexOf(productCondition) >= 0
          )
        );
      } else {
        setCondition(productCondition);
        setProducts(productsResult);
      }
    };

    return(
        <>
            <Header />
            <SearchBar onSearch={onSearch}/>
            
            <Filter
              count={products.length}
              sort={sort}
              condition={condition}
              sortProducts={sortProducts}
              filterProducts={filterProducts}
              input={input}           
            />
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