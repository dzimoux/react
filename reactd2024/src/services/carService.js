import {apiService} from "./apiService";

const carService = {
    getAll: () => {
        return apiService.get('/cars');
    },
    postCar: (carData) => {
        return apiService.post('/cars', carData)
    },
    deletebyId: (id) => {
        return apiService.delete(`/cars/${id}`)
    }

}

export {
    carService
}