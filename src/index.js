import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter} from 'react-router-dom'
import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={"/turtleteach/"}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
