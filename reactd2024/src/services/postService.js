import {apiService} from "./apiService";


const postService = {
    episodes: {
        getAllEpisodePagination: (page = '1') => apiService.get('/episode/?page=', {params: {page}}),
        getAllEpisode: () => apiService.get('/episode'),
        getEpisodebyId: (id) => apiService.get(`/episode/${id}`)
    },
    characters: {
        getAllCharacter: () => apiService.get('/character'),
        getCharacterbyId: (id) => apiService.get(`/character/${id}`)
    }
}

export {
    postService
}