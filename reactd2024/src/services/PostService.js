import {ApiService} from "./ApiService";
import {urls} from "../constants/urls";

const PostService = {
    getTodos: () => ApiService.get(urls.url.todos),
    getAlbums: () => ApiService.get(urls.url.albums),
    getComments: () => ApiService.get(urls.url.comments),
    getPostById: (id) => ApiService.get(urls.url.getPostById(id))
}

export {
    PostService
}