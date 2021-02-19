// Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

// Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
// Poder filtrar por condicion.
// Poder páginar los resultados de a 30 productos

import React from "react";
import ProductCard from "./ProductCard";

const Catalogo = () => {
  return (
    <main class="my-8">
      <div class="container mx-auto px-6">
        <div
          class="h-64 rounded-md overflow-hidden bg-cover bg-center"
          
        >
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold">Sport Shoes</h2>
              <p class="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Shop Now</span>
                <svg
                  class="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
          
        <div class="mt-16">
          <h3 class="text-gray-600 text-2xl font-medium">Store</h3>
          
            <ProductCard />
                        
          
        </div>
      </div>
    </main>
  );
};

export default Catalogo;
