import axios from "axios";

const baseURL = 'https://api.spacexdata.com/v3/launches';

const  axioService = axios.create({baseURL});

export {axioService};


