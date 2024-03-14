import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./validators/router";
import {Provider} from "react-redux";
import {store} from "./store/store";


const App = () => {
    return (
        <div>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
};

export {App};
