import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./counter-store";

//We're aliasing it, but adding types.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const ussAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Now we're exporting two hook variables that have the right TypeScript types to find and in our components,
// we're going to import these hooks from the hooks file, instead of importing the base functions from React-Redux.