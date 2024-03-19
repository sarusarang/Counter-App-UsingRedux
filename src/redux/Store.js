import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

const Store = configureStore({

    reducer:{

        counter:counterReducer,


    }
    
})

export default Store