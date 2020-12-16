import { ADD_TO_CART, REMOVE_FROM_CART } from "./Types";

export const addToCart = (items, product) => (dispatch) => {

    const cartItems= items.slice();
    let productAlreadyExists = false;
    cartItems.forEach(item => {
        if(item.id === product.id){
            productAlreadyExists = true;
            item.count += 1;
        }
        });

        if(!productAlreadyExists){
          cartItems.push({...product, count: 1});
        }
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
        return dispatch({
            type: ADD_TO_CART,
            payload: {
                cartItems: cartItems
            }
        })
       
}

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter(val => val.id !== product.id);

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return dispatch({
          type: REMOVE_FROM_CART,
          payload:{
              cartItems: cartItems
          }
      })
}