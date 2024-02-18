const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'

const urls = {
    url: {
        todos,
        albums,
        comments,
        getPostById: (id) => `/posts/${id}`,
    }
}

export {
    baseURL,
    urls
}