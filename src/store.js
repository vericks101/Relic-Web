import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const intialState = {};
const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux store creation. Dev tools are disabled for production compatibility.
const store = createStore(
    persistedReducer, 
    intialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;