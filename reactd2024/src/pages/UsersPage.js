import React from 'react';
import {Users} from "../components/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};