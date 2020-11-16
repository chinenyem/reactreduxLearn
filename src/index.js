//External imports

import React from 'react'
import {render} from 'react-dom'
// import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

//Local imports
import App from './App'
import rootReducer from './slices/index'

//Assets
import './index.css'

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//Redux Toolkit
const store = configureStore({reducer:rootReducer})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)

