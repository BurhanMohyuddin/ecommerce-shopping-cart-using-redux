import {combineReducers} from 'redux';
import cartReducers from './cartReducers';
import productReducers from './productReducers';

export default combineReducers({
    products: productReducers,
    cart: cartReducers

})