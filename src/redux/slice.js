import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({

    name:"counter",
    initialState:{

        value:0
    },
    reducers:{

        increase:(state)=>{
            state.value+=1
        },
        decrease:(state)=>{

            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

export default counterslice.reducer
export const{increase,decrease,reset}=counterslice.actions