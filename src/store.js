import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer } from './reducers/productReducer';
import { authReducer, registerReducer } from 'reducers/userReducer';

const reducer = combineReducers({
    products: productReducer,
    auth: authReducer,
    register: registerReducer
})

let initialState = {}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

