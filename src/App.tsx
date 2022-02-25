import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { incremented, amountAdded, decremented, counterGetter } from "./store/slices/counter-slice";


function App() {
    //The first thing we want to do is grab the current value of the counter, so we can display it.
    const counterStates = useAppSelector((state) => state.counter); //Takes a selector function
    const count = (counterGetter()).value;
    const dispatch = useAppDispatch()

    function handleIncrement(){
        dispatch(incremented())
    }

    function handleAddAmount(){
        dispatch(amountAdded(5))
    }

    function handleDecrement(){
        dispatch(decremented())
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                <p>count is: {count}</p>
                <p>
                    <button type="button" onClick={handleIncrement}>Increment</button>
                    <button type="button" onClick={handleAddAmount}>Add 5</button>
                    <button type="button" onClick={handleDecrement}>Decrement</button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {' | '}
                    <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
