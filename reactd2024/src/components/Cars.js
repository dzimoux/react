import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {useDispatch, useSelector} from "react-redux";
import {carsAction} from "../store/slices/carSlice";
import {Car} from "./Car";

const Cars = () => {
    const dispatch = useDispatch();
    const car = useSelector(state => state.cars);
    const [newCarModel, setNewCarModel] = useState({brand: '', price: '', year: ''});

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsAction.setCars(data)))
    }, []);

    const setCarFunction = (e) => {
        e.preventDefault();
        // Оновлюємо значення нового автомобіля на основі введення користувача
        setNewCarModel({
            ...newCarModel,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        carService.postCar(newCarModel)
            .then(({data}) => {
                dispatch(carsAction.setCars(data.cars));
            })
            .catch(error => {
                console.error('Error posting car:', error);
            });
    }, [newCarModel, dispatch]);


    return (
        <div>
            <form onSubmit={setCarFunction}>
                <input type="text" placeholder="Car_brand" name="brand" onChange={setCarFunction}
                       value={newCarModel.brand}/>
                <input type="number" placeholder="Price" name="price" onChange={setCarFunction}
                       value={newCarModel.price}/>
                <input type="number" placeholder="Year" name="year" onChange={setCarFunction} value={newCarModel.year}/>
                <button type="submit">Add Car</button>
            </form>
            {car.cars.map(carObject => <Car key={carObject.id} carObject={carObject}/>)}
        </div>
    );
};

export {Cars};
