import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {CarService} from "../services/CarService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger,setTrigger] = useState(null);
    const [triggerUpdate, setTriggerUpdate] = useState(null);
    const [triggerCreate, setTriggerCreate] = useState(null)


    useEffect(()=>{
        CarService.getAll().then(({data})=>setCars(data))
    },[trigger,triggerCreate]);

    return (
        <div>
            <CarForm triggerUpdate={triggerUpdate} setTriggerUpdate={setTriggerUpdate} triggerCreate={triggerCreate} setTriggerCreate={setTriggerCreate}/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};