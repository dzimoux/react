import {apiRequest} from "./apiService";
import {api_key} from "../urls/url";


const movieService = {
    getMoviesPages: (page) => apiRequest.get('/discover/movie', {
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

    getChoosedGenre: (genre_id, page) => apiRequest.get(`/discover/movie?with_genres=${genre_id}&page=${page}`, {
        params: {
            page,
            genre_id,
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