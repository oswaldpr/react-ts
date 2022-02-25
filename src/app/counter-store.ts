// A wrapper around the basics Redux Create Store Function. It automatically sets up a store with the right defaults.
import { configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice';

export const counterStore = configureStore({
    reducer: {
        counter:  counterReducer,
    }
});

export type AppDispatch = typeof counterStore.dispatch;
export type RootState = ReturnType<typeof counterStore.getState>;