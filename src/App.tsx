import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector} from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";


function App() {
    //The first thing we want to do is grab the current value of the counter, so we can display it.
    const count = useAppSelector((state) => state.counter.value); //Takes a selector function
    const dispatch = useAppDispatch()

    function handleClick(){
        // dispatch(incremented())
        dispatch(amountAdded(5))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={handleClick}>
                        count is: {count}
                    </button>
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
