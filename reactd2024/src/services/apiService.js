import axios from "axios";
import {baseURL} from "../urls/urls";
import {urls} from "../urls/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}