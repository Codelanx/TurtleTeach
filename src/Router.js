import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login";
import Customize from "./pages/customize/Customize";
import Course from "./pages/course/Course";
import Sandbox from "./pages/sandbox/Sandbox";
import isLogged from "./pages/landing/Landing";
import Testing from "./pages/Testing";
import Landing from "./pages/landing/Landing";
import ComponentPage from "./pages/ComponentPage";
import ClassHome from "./pages/ClassHome/ClassHome";
import StudentHome from "./pages/StudentHome/StudentHome";
import TeacherHome from "./pages/TeacherHome/TeacherHome";
import DevEnvironment from "./pages/DevEnvironment/DevEnvironment";

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
            <Route path="/test/component">
                <ComponentPage profile={props.profile} />
            </Route>
            <Route path="/test">
                <Testing profile={props.profile} />
            </Route>n
            <Route path="/ClassHome">
                <ClassHome profile={props.profile} />
            </Route>
            <Route path="/StudentHome">
                <StudentHome profile={props.profile} />
            </Route>
            <Route path="/TeacherHome">
                <TeacherHome profile={props.profile} />
            </Route>
            <Route path="/DevEnvironment">
                <DevEnvironment profile={props.profile} submission={"124891221"} grading={true} />
            </Route>
            <Route path="/">
                <Landing profile={props.profile} />
            </Route>
        </Switch>
    );
}

export default TurtleRouter;