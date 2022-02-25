import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
// createSlice main api function to define redux logic
// PayloadAction represents the content of one defined object

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Logic and updates (actions)
        // So, that's the basics of writing slices. You define an initial state and a type,
        // you define the case reducers. For every action object that one of those reducers takes,
        // you use the payload action type to say, "here's what's inside the action.payload field."
        incremented(state) {
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>){
            // The payload can be any type but for our example it's a number
            state.value += action.payload;
        },
        decremented(state){
            state.value--;
        }
    }
})

export const { incremented, amountAdded, decremented } = counterSlice.actions;
export default counterSlice.reducer; // For the store

export function counterGetter(){
    return useAppSelector((state) => state.counter)
}