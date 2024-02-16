import React from 'react';
import {CarService} from "../services/CarService";

const Car = ({car, setTrigger, trigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {

        await CarService.deletebyId(id);

// setTrigger(trigger=!trigger);
        setTrigger(prev => !prev);

        const updateCar = async (id) => {
            await CarService.updateById(id);
        }
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteCar}>DELETE</button>
            <button>UPDATE</button>
        </div>
    );
};

export {Car};