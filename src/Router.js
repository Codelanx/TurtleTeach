import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Customize from "./pages/customize/Customize";
import Course from "./pages/course/Course";
import Sandbox from "./pages/sandbox/Sandbox";
import Landing from "./pages/Landing";

function TurtleRouter() {
    //TODO: Routing for authed vs not
    return (
        <Switch>
            <Route path="/sandbox">
                <Sandbox />
            </Route>
            <Route path="/course">
                <Course />
            </Route>
            <Route path="/customize">
                <Login />
            </Route>
            <Route path="/login">
                <Customize />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    );
}

export default TurtleRouter;