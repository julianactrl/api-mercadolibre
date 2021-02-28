// En este componente se muestra un producto en particular, debemos mostrar:

// su imagen.
// su titulo.
// su precio (con la moneda).
// su condicion.
// si tiene stock o no.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../redux/cartDucks";
import { useToasts } from "react-toast-notifications";

const ProductCard = (props) => {
  const carrito = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleClick = () => {
    if (!carrito[props.title] && carrito[props.title] !== 0) {
      let payload = {
        id: props.id,
        title: props.title,
        img: props.thumbnail,
        price: props.price,
        stock: props.available_quantity,
        rate: props.rate
      };
      dispatch(addToCartAction(payload));
      console.log("SOY PAYLOAD ---->", payload);

      addToast(`El producto ${props.title} se agrego con exito`, {
        appearance: "success",
      });
    }
  };

  return (
    <div className="p-10">
      <div className="rounded overflow-hidden shadow-lg border-2">
        <img
          className="w-full h-80"
          src={props.thumbnail}
          alt="thumbnail"
          onClick={() => window.open(props.permalink, "_blank")}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            <b>Precio</b>: $ {Intl.NumberFormat("de-DE").format(props.price)}{" "}
            {props.currency_id}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <b>Condition</b>: {props.condition}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <b>Stock</b>: {props.available_quantity}
          </span>
          <button
            onClick={handleClick}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            <i className="fas fa-shopping-cart text-blue"></i>
          </button>
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <b>Rate</b>: {Intl.NumberFormat("de-DE").format(props.rate)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
