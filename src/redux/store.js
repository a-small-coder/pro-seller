import {combineReducers, createStore} from 'redux';
import authReducer from "./auth-reducer";
import categoryReducer from './category_reducer'


let reducers = combineReducers({
    auth: authReducer,
    store: categoryReducer,
})

let store = createStore(reducers);


window.state = store.getState();

export default  store


