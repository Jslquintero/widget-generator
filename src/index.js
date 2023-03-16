import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.css';
import {RouterProvider} from 'react-router-dom';
import router from './routes/Router';
import {Provider} from "react-redux";
import store from "./redux/login/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<React.StrictMode>
    <Provider store={store}/>
    <RouterProvider router={router}/>
</React.StrictMode>);
