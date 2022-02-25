import { createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        // logic and updates - like action
        incremented(state) {
            state.value++;
        },
        decremented(state){
            state.value--;
        }
    }
})

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;