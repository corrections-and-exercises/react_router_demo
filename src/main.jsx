import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Products from './Products.jsx';
import Home from './Home.jsx';
import {loader as productLoader} from './Products.jsx';
import {loader as homeLoader} from './Home.jsx';
import Root, {loader as rootLoader} from './Root.jsx';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: rootLoader,
        children: [
            {index: true, element: <Home />, loader: homeLoader},
            {
                path: 'categories/:category',
                element: <Products />,
                loader: productLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
