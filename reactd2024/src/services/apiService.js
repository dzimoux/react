import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api';

const apiService = axios.create({baseURL});

export {
    apiService
}