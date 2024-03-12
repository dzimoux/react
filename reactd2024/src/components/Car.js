import React from 'react';
import {useDispatch} from "react-redux";
import {carService} from "../services/carService";
import {carsAction} from "../store/slices/carSlice";

const Car = ({carObject}) => {
    const {brand, price, id} = carObject;
    const dispatch = useDispatch();

    const deleteCar = (carId) => {
        carService.deletebyId(carId)
            .then(() => {
                dispatch(carsAction.deleteCar(carId));
            })
            .catch(error => {
                console.error('Error deleting car:', error);
            });
    }

    return (
        <div>
            <div>{id}</div>
            <div>Name of car: {brand}</div>
            <div>Price of car -- {price}</div>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <br/>
        </div>
    );
};

export {Car};
