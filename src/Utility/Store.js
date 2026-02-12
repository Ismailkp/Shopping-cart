import { configureStore } from "@reduxjs/toolkit";
import { UserApiData } from "../Features/FeaturesSlice";
import {CartFuncations} from '../Features/CartSlice'


export const store=configureStore({
    reducer:{
        Api_data:UserApiData,
        cart:CartFuncations
    },
})