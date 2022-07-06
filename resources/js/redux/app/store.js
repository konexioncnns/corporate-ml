import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "../featured/formation/filterSlice";
import FormationReducer from "../featured/formation/formationSlice";


export const store = configureStore({
    reducer:{
        cart:FormationReducer,
        search:FilterReducer
    }
})
