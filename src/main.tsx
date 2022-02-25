import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import { counterStore } from "./app/counter-store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={counterStore}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
