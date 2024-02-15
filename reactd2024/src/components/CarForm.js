import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {CarService} from "../services/CarService";

const CarForm = ({triggerUpdate,setUpdate,triggercreate,createCar}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue}= useForm({
        mode:"all"
    })

    useEffect(()=>{
        if(triggerUpdate){
            setValue()
        }
    })

    const save= async(data)=>{
       await CarService.create(data);
createCar(triggercreate=!triggercreate)
    }

    const update = async (car) =>{
        await CarService.updateById(triggerUpdate.id,car)
        setUpdate(triggerUpdate=!triggerUpdate)
    }



    return (
       <form onSubmit={handleSubmit(triggerUpdate?update : save)}>
           <input type='text' placeholder={'brand'}{...register('brand', {pattern: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/})}/>
           <input type='text' placeholder={'price'}{...register('price',{valueAsNumber:true,
           min:0,
           max:1_000_000})}/>
           <input type='number' placeholder={'year'}{...register('year',{valueAsNumber:true,
           min:1990,
           max:2023})}/>
           <button disabled={!isValid}>{triggerUpdate?'update':'save'}</button>
       </form>
    );



};

export {CarForm};