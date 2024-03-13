import {apiService} from "./apiService";


const postService = {
    episodes: {
        getAllEpisode: (page = '1') => apiService.get('/episode/?page=', {params: {page}}),
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