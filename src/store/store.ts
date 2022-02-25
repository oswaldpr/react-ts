// A wrapper around the basics Redux Create Store Function. It automatically sets up a store with the right defaults.
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter-slice';

//Steps
// - Create store
// - Apply the store to the main tsx file (using Provider store={store})
// - Create slice (initialState, createSlice with reducers witch are actions to dispatch)
// - Add slice reducer to the store
// - Set the hooks to add types to function
// - Import and use store actions (from hook) and getters (from the slice based on hooks) in the App

export const store = configureStore({
    reducer: {
        counter:  counterReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;