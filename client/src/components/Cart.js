import React from "react";

// ----- Hooks react-redux ----------
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector(store => store.cart.array)

    const dispatch = useDispatch()

  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
      </div>
      <hr className="my-3" />

      <div className="flex justify-between mt-6">
        <div className="flex">
          <img
            className="h-20 w-20 object-cover rounded"
            src="{item.thumbnail}"
            alt="producto imagen"
          />

          <div className="mx-3">
            <h3 className="text-sm text-gray-600">Producto Titulo</h3>
            <div className="flex items-center mt-2">
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                +
              </button>
              <span className="text-gray-700 mx-2">Cantidad</span>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                -
              </button>
            </div>
          </div>
        </div>
        <span className="text-gray-600">
            $$
        </span>
      </div>

      <div className="mt-8"></div>
      <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <span>Checkout</span>
        <svg
          className="h-5 w-5 mx-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </>
  );
};

export default Cart;
