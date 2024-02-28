import {apiService} from "./apiService";
import {urls} from "../urls/url";

const postService = {
    episodes: {
        getAllEpisode: (page = '1') => apiService.get(urls.episodes.base, {params: {page}}),
        getEpisodebyId: (id) => apiService.get(urls.episodes.byId(id))
    },
    characters: {
        getAllCharacter: () => apiService.get(urls.characters.base),
        getCharacterbyId: (id) => apiService.get(urls.characters.byId(id))
    }
}

export {
    postService
}