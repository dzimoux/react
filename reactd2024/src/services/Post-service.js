import {apiService} from "./apiService";

const postService ={
    getAll: apiService.get('/comments'),
    create: (data) => apiService.post('/comments', data),
}

export {postService}