import {configureStore} from "@reduxjs/toolkit";
import {RickAndMortyReducer} from "./RickAndMortySlice";

const store = configureStore({
    reducer: {
        episodes: RickAndMortyReducer
    }
})

export {
    store
}