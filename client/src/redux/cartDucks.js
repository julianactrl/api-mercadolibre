// const [cartItems, setCartItems] = useState([]);
//   const itemsCart = cartItems.slice();

//   const addToCart = (product) => {
//     let alreadyInCart = false;
//     itemsCart.forEach((item) => {
//       if (item.id === product.id) {
//         item.count++;
//         alreadyInCart = true;
//       }
//     });
//     if (!alreadyInCart) {
//       itemsCart.push({ ...product, count: 1 });
//     }
//     setCartItems(itemsCart);
//   };
//   const removeFromCart = (product) => {
//     setCartItems(itemsCart.filter((x) => x.id !== product.id));
//   };
// case DELETE_ITEM_CART:
// 			return {
// 				...state,
// 				cart: {
// 					...state.cart,
// 					cart: state.cart.filter(item => item.id !== action.payload)
// 				}
// 			}

// -------- CONSTANTS------------------------------
export const ADD_ITEM_CART = "ADD_ITEM_CART";
export const DELETE_ITEM_CART = "DELETE_ITEM_CART";

// ----- ESTADO INICIAL -------
const initialState = {
  array: [],
};

// ----------- REDUCER ----------------------------------
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      return { ...state, array: action.payload };
    default:
      return state;
  }
};

export default cartReducer;

// ------------- ACTIONS ------------------------------------

export const addToCartAction = (state = initialState) => (
  dispatch,
  getState
) => {
  const itemsCart = state.array
  const addToCart = (product) => {
    let alreadyInCart = false;
    itemsCart.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      itemsCart.push({ ...product, count: 1 });
    }
    state.array(itemsCart);
  };

  return {
    type: ADD_ITEM_CART,
	addToCart
  };
};
