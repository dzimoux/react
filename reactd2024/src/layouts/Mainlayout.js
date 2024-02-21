import {Outlet} from "react-router-dom";
import React from 'react';

const Mainlayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {Mainlayout};