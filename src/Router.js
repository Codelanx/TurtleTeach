import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Customize from "./pages/customize/Customize";
import Course from "./pages/course/Course";
import Sandbox from "./pages/sandbox/Sandbox";
import Landing from "./pages/Landing";
import Testing from "./pages/Testing";
import ComponentPage from "./pages/ComponentPage";

function TurtleRouter(props) {
    //TODO: Routing for authed vs not
    return (
        <Switch>
            <Route path="/sandbox">
                <Sandbox profile={props.profile} />
            </Route>
            <Route path="/class">
                <Course profile={props.profile} />
            </Route>
            <Route path="/customize">
                <Customize profile={props.profile} />
            </Route>
            <Route path="/login">
                <Login profile={props.profile} />
            </Route>
            <Route path="/home">
                <Home profile={props.profile} />
            </Route>
            <Route path="/landing">
                <Landing profile={props.profile} />
            </Route>
            <Route path="/test/component">
                <ComponentPage profile={props.profile} />
            </Route>
            <Route path="/test">
                <Testing profile={props.profile} />
            </Route>
            <Route path="/">
                <Testing profile={props.profile} />
            </Route>
        </Switch>
    );
}

export default TurtleRouter;