import React from 'react';
import {SearchBar} from "../components/SearchBar/SearchBar";
import {Header} from "../components/Header/Header";

const SearchPage = () => {
    return (
        <div className={'search_bar_container'}>
            <SearchBar/>
        </div>
    );
};

export {SearchPage};