import React from 'react';
import {Movies} from "../components/Movies";
import {Header} from "../components/Header";

const MoviePage = () => {
    return (
        <div>
            <Header/>
            <Movies/>
        </div>
    );
};

export {MoviePage};