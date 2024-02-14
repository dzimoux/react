import {apiService} from "./ApiService";
import {urls} from "../constants/urls";

const CarService = {
    getAll:()=> apiService.get(urls.car.base),
    updateById: (id,data)=> apiService.put(urls.car.byId(id), data),
    create:(data)=>apiService.post(urls.car.base, data),
    deletebyId: (id)=> apiService.delete(urls.car.byId(id))
}

export {
    CarService
}