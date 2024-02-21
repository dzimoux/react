import {apiService} from "./apiService";
import {urls} from "../urls/urls";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    getAllbyId: (id) => apiService.get(urls.users.byID(id))
}

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    getAllbyId: (id) => apiService.get(urls.posts.byID(id)),
    getAllbyUserID: (id) => apiService.get(urls.posts.byUserID(id))
}

const commentService = {
    getCommentbyPostId: (id) => apiService.get(urls.comments.byPostID(id))
}


export {
    userService,
    postService,
    commentService
}

