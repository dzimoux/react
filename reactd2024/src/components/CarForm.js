import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode:"all"
    })

    const save=(data)=>{
        console.log(data)
    }


    return (
       <form onSubmit={handleSubmit(save)}>
           <input type='text' placeholder={'brand'}{...register('brand', {pattern: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/})}/>
           <input type='text' placeholder={'price'}{...register('price',{valueAsNumber:true,
           min:0,
           max:1_000_000})}/>
           <input type='number' placeholder={'year'}{...register('year',{valueAsNumber:true,
           min:1990,
           max:2023})}/>
           <button disabled={!isValid}>Save</button>
       </form>
    );
};

export {CarForm};