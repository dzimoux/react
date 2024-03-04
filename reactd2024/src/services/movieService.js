import {apiRequest} from "./apiService";
import {api_key} from "../urls/url";


const movieService = {
    getMoviesPages: (page = '1') => apiRequest.get('/discover/movie', {
        params: {
            page,
            api_key
        }
    }),

    getMoviesPagesbyId: (movie_id) => apiRequest.get(`/movie/${movie_id}`, {
        params: {
            api_key
        }
    }),

    getGenreList: () => apiRequest.get('/genre/movie/list', {
        params: {
            api_key
        }

    }),

    getChoosedGenre: () => apiRequest.get('/discover/movie', {
        params: {

            api_key
        }
    }),

    getSearchedMovies: (searchInfo) => apiRequest.get(`/search/keyword?query=${searchInfo}`, {
            params: {
                api_key
            }
        }
    )


};

export {movieService};