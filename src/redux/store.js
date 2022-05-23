import {combineReducers, createStore} from 'redux';
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    auth: authReducer,
})

let store = createStore(reducers);


window.state = store.getState();

export default  store


