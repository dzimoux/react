import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {MoviePage} from "../pages/MoviePage";
import {MovieDetailsPage} from "../pages/MovieDetailsPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviePage/>
            },
            {
                path: ':id', element: <MovieDetailsPage/>
            }
        ]
    }
])

export {
    router
}