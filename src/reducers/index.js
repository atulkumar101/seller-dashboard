import { combineReducers } from 'redux';
import user from './reducer_user';
import productList from './reducer_productList';

export default combineReducers({
    user,
    productList,
})