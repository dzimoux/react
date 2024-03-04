import React from 'react';
import {SearchBar} from "../components/SearchBar";
import {Header} from "../components/Header";

const SearchPage = () => {
    return (
        <div>
            <Header/>
            <div className={'search_bar_container'}>
                <SearchBar/>
            </div>
        </div>
    );
};

export {SearchPage};