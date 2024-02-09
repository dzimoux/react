import axios from "axios";
import {baseURL} from "../constants/urls";

const axioService = axios.create(baseURL);

export {
    axioService
}