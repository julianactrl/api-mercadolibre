// En este componente se muestra un producto en particular, debemos mostrar:

// su imagen.
// su titulo.
// su precio (con la moneda).
// su condicion.
// si tiene stock o no.
import React from "react";


const ProductCard = (props) => {
    

   
  return (
    <div className="p-10">
    
    <div className="rounded overflow-hidden shadow-lg border-2">
      <img 
      className="w-full h-80" 
      src={props.thumbnail}
      alt="thumbnail"
      onClick={() => window.open(props.permalink, "_blank")}/>
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          <b>Precio</b>: $ {Intl.NumberFormat("de-DE").format(props.price)}{" "}{props.currency_id}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>Condition</b>: {props.condition}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>Stock</b>: {props.available_quantity}</span>
        <button 
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><i className="fas fa-shopping-cart text-blue"></i></button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
