import React, {useEffect} from 'react';
import {useState} from "react";
import {Ship} from "../Ship/Ship";

const Ships = () => {
const [ships, setShips] = useState([]);

useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => setShips(value))
},[])

    return (
        <div>
            {ships.map(ship => <Ship ship={ship}/>)}
        </div>
    );
};

export {Ships};