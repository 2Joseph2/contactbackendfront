import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const conatctSlice=createSlice({
    name:"contact",
    initialState:[
        {
            id:uuidv4(),
            name:"meriam",
            age:29,
            email:'bensalah@gmail.com'
        },
        {
            id:uuidv4(),
            name:"marwa",
            age:29,
            email:'marwa@gmail.com'
        }
    ],
    reducers:{
        setContact:(state,action)=>{
   return action.payload
        }
    }
})

export const {setContact} = conatctSlice.actions
export default conatctSlice.reducer