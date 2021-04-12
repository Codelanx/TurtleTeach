import React from "react";
import Navigation from "../components/Navigation";
import './ComponentPage.css';
import {Link} from "react-router-dom";
import StudentLabel from "../components/StudentLabel";
import TeacherHome from "../pages/TeacherHome/TeacherHome";
import StudentHome from "../pages/StudentHome/StudentHome";

class ComponentPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-border">
                <Link to="/test">&lt; Testing Page</Link>
                <h1>Component Render:</h1>
                <div className="content-border">
                    <StudentLabel />
                    <StudentHome />
                    <TeacherHome />

                </div>
            </div>

        );
    }

}

export default ComponentPage;