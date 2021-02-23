import React, { useState, useEffect } from "react";
import axios from "axios";

// ---- componentes ---------
import Catalogo from "./Catalogo";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Category from "./Category";

// ----------IMAGEN --------------
import mla from './assets/mla.png'

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
  const currentProducts = products.slice(indexFirtsProduct, indexLastProduct);
  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  // ----- SEARCHBAR ------------------------------------------//

  useEffect(() => {
    onSearch()
  }, [])
  const onSearch = async (product) => {
    
    setInput(product);
    console.log("soy product---->", product);
    await axios
      .get(`http://localhost:3001/api/search?q=tv&${product}`)
      .then((p) => {
        setProducts(p.data);
        setProductsResult(p.data);
        setError(false);
        console.log("soy la info----->", p);
      })
      .catch((err) => {
        console.log("soy el error----------->>>", err);
        setError(true);
      });
  };

  //-------- CATEGORIES ------------------------------//
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    searchCategory()
  }, [])

  const searchCategory = async () => {
    const data = await axios
      .get(`http://localhost:3001/api/categories`)
      .then((categories) => {
        setCategories(categories.data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ----------- FILTRO -------------------------------//
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id > b.id
            ? 1
            : -1
        )
    );
  };

  const filterProducts = (event) => {
    let productCondition = event.target.value;

    if (productCondition === "new" || productCondition === "used") {
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

  return (
    <>
      <div style={{ background: `#fee600` }}>
        <header>
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="hidden w-full text-gray-600 md:flex md:items-center">
                <img className="w-30 h-20" src={mla} alt="logo mla"/>
              </div>
              <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                <SearchBar onSearch={onSearch} />
              </div>
              <div className="flex items-center justify-end w-full">
                

                <div className="flex sm:hidden">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
              <Category
                searchCategory={searchCategory}
                categories={categories}
              />
              <Filter
                count={products.length}
                sort={sort}
                condition={condition}
                sortProducts={sortProducts}
                filterProducts={filterProducts}
                input={input}
              />
              <button className="text-gray-800 focus:outline-none mx-4 sm:mx-0">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
            </nav>
          </div>
        </header>
      </div>

      
      <Catalogo
        products={currentProducts}
        //addToCart={addToCart}
        error={error}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        pagination={pagination}
        key={"#"}
      />
      <Footer />
    </>
  );
};

export default Home;
