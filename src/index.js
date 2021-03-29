import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Component imports for page routing 
import Home from './home/Home'
import Customize from './customize/Customize'
import Course from './course/Course'
import Login from './login/Login'
import Sandbox from './sandbox/Sandbox'

ReactDOM.render(
    <React.StrictMode>
        <div className="Router">
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/customize" component={Customize} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/sandbox" component={Sandbox} />
            </Router> 
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
