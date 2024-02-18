import {baseURL} from "../constants/urls";
import {urls} from "../constants/urls";
import axios from "axios";

const ApiService = axios.create({baseURL});

export {
    ApiService
}