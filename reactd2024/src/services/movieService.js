import {apiRequest} from "./apiService";
import {api_key} from "../urls/url";


const movieService = {
    getMoviesPages: (page = '1') => apiRequest.get('/discover/movie', {
        params: {
            page,
            api_key
        }
    }),

};

export {movieService};