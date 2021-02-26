import React, { useState } from "react";

// ----- Hooks react-redux ----------
import {  useSelector } from "react-redux";


const Cart = ({ error }) => {

  //Redux
  const carrito = useSelector((store) => store.cart.array);
  
  // Boton de cantidad
  const [ quantity, setQuantity] = useState(0)

  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
      </div>
      <hr className="my-3" />
      {error ? (
        <div>Oppps! algo salio mal</div>
      ) : (
        carrito.map((p) => (
          <div key={p.id} className="flex justify-between mt-6">
            <div className="flex">
              <img
                className="h-20 w-20 object-cover rounded"
                src={p.img}
                alt="producto imagen"
              />

              <div className="mx-3">
                <h3 className="text-sm text-gray-600">{p.title}</h3>
                <div className="flex items-center mt-2">  
                    {p.stock > 0 && (
                      <select 
                      value={quantity}
                      onChange={e => setQuantity(e.target.value)}
                      className="text-gray-700 mx-2">
                        { [...Array(p.stock).keys()].map(x => (
                            <option value={x + 1} key={x + 1}>{x + 1}</option>
                        ))}
                      </select>
                     )}
                </div>
              </div>
            </div>
            <span className="text-gray-600">
              ${p.price}
            </span>
          </div>
        ))
      )}

      <div className="mt-8"></div>
      <a
        href="#"
        className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      >
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
