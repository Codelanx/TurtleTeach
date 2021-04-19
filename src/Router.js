import React from "react";
import {Route, Switch} from "react-router-dom";
import Login, {Register} from "./pages/login/Login";
import Customize from "./pages/customize/Customize";
import Sandbox from "./pages/sandbox/Sandbox";
import Testing from "./pages/Testing";
import Landing from "./pages/landing/Landing";
import ComponentPage from "./pages/ComponentPage";
import ClassHome from "./pages/clazz/ClassHome";
import StudentHome from "./pages/home/StudentHome";
import TeacherHome from "./pages/home/TeacherHome";
import DevEnvironment from "./pages/puzzle/DevEnvironment";
import {Redirect, useParams} from "react-router";
import {UserType} from "./data/User";
import Course from "./data/Course";

function LogoutRedirect(props) {
    props.profile.setCurrentUser(null);
    return (
        <Redirect to={"/"} />
    )
}


function HomeRoute(props) {
    if (!props.profile.isLoggedIn()) {
        return (<Landing profile={props.profile} />);
    }
    switch (props.profile.getCurrentUser().getUserType()) {
        case UserType.STUDENT:
            return (<StudentHome profile={props.profile} />);
        case UserType.TEACHER:
            return (<TeacherHome profile={props.profile} />);
        default:
            return (<Landing profile={props.profile} />);
    }
}

function ClassRoute(props) {
    let {id} = useParams();
    let course = Course.findCourse(id);
    if (course === null) {
        course = Course.getCourses()[0];
    }
    return (
        <ClassHome profile={props.profile} course={course} />
    );
}

function PuzzleRoute(props) {
    let {id, submission} = useParams();
    let puzzle = null; //TODO: Puzzle data
    if (submission) {
        return (<DevEnvironment profile={props.profile} puzzle={puzzle} submission={submission} grading={!!props.grading} />);
    } else {
        return (<DevEnvironment profile={props.profile} puzzle={puzzle} grading={!!props.grading} />);
    }
}

function SandboxRoute(props) {
    let {id} = useParams();
    let puzzle = null; //TODO: Puzzle data
    return (
        <Sandbox profile={props.profile} puzzle={puzzle} />
    );
}

function TurtleRouter(props) {
    return (
        <Switch>
            <Route path="/sandbox">
                <SandboxRoute profile={props.profile} />
            </Route>
            <Route path="/sandbox/:id">
                <SandboxRoute profile={props.profile} />
            </Route>
            <Route path="/class/:id">
                <ClassRoute profile={props.profile} />
            </Route>
            <Route path="/customize">
                <Customize profile={props.profile} />
            </Route>
            <Route path="/login/register">
                <Register profile={props.profile} />
            </Route>
            <Route path="/login">
                <Login profile={props.profile} />
            </Route>
            <Route path="/logout">
                <LogoutRedirect profile={props.profile} />
            </Route>
            <Route path="/test/component">
                <ComponentPage profile={props.profile} />
            </Route>
            <Route path="/test">
                <Testing profile={props.profile} />
            </Route>
            <Route path="/puzzle/:id/grading/:submission">
                <PuzzleRoute profile={props.profile} grading/>
            </Route>
            <Route path="/puzzle/:id">
                <PuzzleRoute profile={props.profile} />
            </Route>
            <Route path="/landing">
                <Landing profile={props.profile} />
            </Route>
            <Route path="/">
                <HomeRoute profile={props.profile} />
            </Route>
        </Switch>
    );
}

export default TurtleRouter;