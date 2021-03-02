import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

// ---- componentes ---------
import Catalogo from "./Catalogo";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Category from "./Category";
import Cart from "./Cart";

// ----------IMAGEN --------------
import mla from "./assets/mla.png";

import { useToasts } from "react-toast-notifications";

const Home = () => {

  const { addToast } = useToasts();
  //---------------MODAL -------------------------------
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "0",
      left: "60%",
      right: "0",
      // bottom: 'auto',
      marginRight: "%",
      // transform: 'translate(-50%, -50%)'
    },
  };

  // ------------ ERRORS -----------------------------//
  const [error, setError] = useState(false);

  // ------------ PRODUCTS -----------------------------//
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  const [input, setInput] = useState("");

  // ----------- PAGINATION -----------------------------//
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  // ----- SEARCHBAR ------------------------------------------//

  const [query, setQuery] = useState("tv");

  useEffect(() => {
    onSearch()
  }, [query]);
  console.log(query)

  const onSearch =  (product) => {
    setInput(product);
    axios.get(`http://localhost:3001/api/search?q=${query}`)
    .then((p) => {
        console.log("soy la info----->",p);
        setProducts(p.data);
        setProductsResult(p.data);
        setError(false);
      })
    .catch(err => {
        console.log("soy el error----------->>>", err);
        setError(true);
        addToast(`Algo salio mal`, {
          appearance: "error",
        });
    })
  }

  //-------- CATEGORIES ------------------------------//
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    searchCategory();
  }, []);

  const searchCategory = async () => {
    await axios
      .get(`http://localhost:3001/api/categories`)
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ----------- FILTROS -------------------------------//
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

  const sortProducts = (e) => {
    const sort = e.target.value;
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

  const filterProducts = (e) => {
    let productCondition = e.target.value;

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
                <img className="w-30 h-20" src={mla} alt="logo mla" />
              </div>
              <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                <SearchBar onSearch={onSearch} setQuery={setQuery} />
              </div>
              <div className="flex items-center justify-end w-full">
              
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

              <button
                onClick={() => SetModalIsOpen(true)}
                className="text-gray-800 focus:outline-none mx-4 sm:mx-0"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
      <Catalogo products={currentProducts} error={error} />
      <Modal style={customStyles} isOpen={modalIsOpen} ariaHideApp={false}>
        <div className="flex items-center justify-between ">
          <button
            onClick={() => SetModalIsOpen(false)}
            className="focus:outline-none modal-close px-2 bg-blue-600 p-2 rounded text-white hover:bg-blue-500"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <Cart products={currentProducts} error={error} />
      </Modal>
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
