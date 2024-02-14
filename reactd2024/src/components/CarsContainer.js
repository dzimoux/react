import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {CarService} from "../services/CarService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarsContainer = () => {
    const [cars, setCar] = useState([]);
    const [trigger,setTrigger] = useState(null);


    useEffect(()=>{
        CarService.getAll().then(({data})=>setCar(data))
    },[trigger]);
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};