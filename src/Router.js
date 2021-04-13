import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Customize from "./pages/customize/Customize";
import Course from "./pages/course/Course";
import Sandbox from "./pages/sandbox/Sandbox";
import Landing from "./pages/landing/Landing";
import Testing from "./pages/Testing";
import ComponentPage from "./pages/ComponentPage";
import ClassHome from "./pages/ClassHome/ClassHome";
import StudentHome from "./pages/StudentHome/StudentHome";
import TeacherHome from "./pages/TeacherHome/TeacherHome";

function HomeRoute(props) {
    if (false) { //TODO: REMOVE
        return (
            <Testing profile={props.profile} />
        );
    }
    if (!props.profile.isLoggedIn()) {
        return (<Landing profile={props.profile} />);
    }
    //TODO: Other conditionals
    return (<Course profile={props.profile} />);
}

function TurtleRouter(props) {
    return (
        <Switch>
            <Route path="/StudentHome">
                <Testing profile={props.profile} />
            </Route>
            <Route path="/TeacherHome">
                <Testing profile={props.profile} />
            </Route>
            <Route path="/sandbox">
                <Sandbox profile={props.profile} />
            </Route>
            <Route path="/class/:classID">
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
            <Route path="/ClassHome">
                <ClassHome profile={props.profile} />
            </Route>
            <Route path="/">
                <HomeRoute profile={props.profile} />
            </Route>
        </Switch>
    );
}

export default TurtleRouter;