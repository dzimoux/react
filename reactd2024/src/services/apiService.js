import axios from "axios";
const baseURL = 'https://jsonplaceholder.typicode.com';

const apiService = axios.create({baseURL});

export {
    apiService
}



