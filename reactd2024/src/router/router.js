import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {MoviePage} from "../pages/MoviePage";
import {MovieDetailsPage} from "../pages/MovieDetailsPage";
import {GenresPage} from "../pages/GenresPage";
import {GenreDetailsPage} from "../pages/GenreDetailsPage";
import {SearchPage} from "../pages/SearchPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviePage/>,
            },
            {
                path: `/movie/:movie_id`, element: <MovieDetailsPage/>
            },
            {
                path: '/genre/movie/list', element: <GenresPage/>
            },
            {
                path: '/genre/:id', element: <GenreDetailsPage/>
            },
            {
                path: '/search/movie', element: <SearchPage/>
            }
        ]
    }
])

export {
    router
}