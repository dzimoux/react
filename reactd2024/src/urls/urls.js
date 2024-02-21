const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';


const urls = {
    users: {
        base: users,
        byID: (id) => `${users}/${id}`
    },

    posts: {
        base: posts,
        byID: (id) => `${posts}/${id}`,
        byUserID: (id) => `${users}/${id}${posts}`
    },
    comments: {
        base: comments,
        byPostID: (id) => `${posts}/${id}${comments}`
    }

}

export {
    baseURL,
    urls
}