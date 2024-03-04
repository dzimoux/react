import axios from "axios";
import {baseURL} from "../urls/url";


const apiRequest = axios.create({
    baseURL
});

export {
    apiRequest,

};