import {apiService} from "./apiService";

const postService ={
    getAll: apiService.get('/users'),
    create: (data) => apiService.post('/users', data),
}

export {postService}