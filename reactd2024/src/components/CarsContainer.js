import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {CarService} from "../services/CarService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarsContainer = () => {
    const [cars, setCar] = useState([]);
    const [trigger,setTrigger] = useState(null);
    const [triggerUpdate, setUpdate] = useState(null);
    const [triggerCreate, createCar] = useState(null)


    useEffect(()=>{
        CarService.getAll().then(({data})=>setCar(data))
    },[trigger]);
    return (
        <div>
            <CarForm triggerUpdate={triggerUpdate} setUpdate={setUpdate} triggercreate={triggerCreate} createCar={createCar}/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};