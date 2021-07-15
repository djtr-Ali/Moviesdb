import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from "./reducer/userReducer";
import createSagaMiddleware from 'redux-saga'
import userSaga from "./sagas/userSaga";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
 reducer:userReducer,
    middleware:[...getDefaultMiddleware(),sagaMiddleware]
})
sagaMiddleware.run(userSaga)

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
   </React.StrictMode>,
  document.getElementById('root')
);