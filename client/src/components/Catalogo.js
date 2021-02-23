// Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

// Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
// Poder filtrar por condicion.
// Poder páginar los resultados de a 30 productos

import React from "react";
import ProductCard from "./ProductCard";


const Catalogo = ({ products, addToCart, error }) => {

  
  return (
    <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="">
          
          {error ? (<div>Oppps! algo salio mal</div>) : (  
          <div className="">
            <h3 className="text-gray-600 text-2xl font-medium"></h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {products.map((product) => {
              return (
                <ProductCard 
                key={product.id}
                title={product.title}
                price={product.price}
                currency_id={product.currency_id}
                available_quantity={product.available_quantity}
                thumbnail={product.thumbnail}
                condition={product.condition}
                permalink={product.permalink}
                //addToCart={() => addToCart(product)}
                />
                );
              })}
            </div>
          </div>
          )}            
          
          
        </div>
      </div>
    </main>
  );
};

export default Catalogo;
