import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";

const MainLayout = () => {
    return (
        <div className={'header'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};