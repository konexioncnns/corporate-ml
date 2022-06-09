import { configureStore } from "@reduxjs/toolkit";
import FormationReducer from "../featured/formation/formationSlice";


export const store = configureStore({
    reducer:{
        cart:FormationReducer
    }
})
