import React from 'react';
import {Car} from "./Car";

const Cars = ({cars, setTrigger,trigger}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setTrigger={setTrigger} trigger={trigger}/>)}
        </div>
    );
};

export {Cars};