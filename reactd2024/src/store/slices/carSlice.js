import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: [],
    postedCar: {}
}

const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            setCars: (state, action) => {
                state.cars = action.payload.map(car => ({...car}));
            },
            postCar: (state, action) => {
                state.cars.push(action.payload);
            },
            deleteCar: (state, action) => {
                const carIdForDelete = action.payload;
                state.cars = state.cars.filter(car => car.id !== carIdForDelete);
            }

        }
    }
)

const {reducer: carReducer, actions} = carSlice;

const carsAction = {
    ...actions
}

export {
    carReducer,
    carsAction
}

