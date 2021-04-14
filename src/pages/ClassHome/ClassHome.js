import React from 'react';
import './ClassHome.css';
import StudentTab from "../../components/StudentTab";
import TeacherTab from "../../components/TeacherTab";
import { Link } from "react-router-dom";

class StudentHome extends React.Component {
    render() {
        return (
            <div className="ClassHome">
                <StudentTab/>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
}

class TeacherHome extends React.Component {
    render() {
        return (
            <div className="ClassHome">
                <TeacherTab/>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
}


class ClassHome extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {

        function whichHome(profile){

            if(profile.getCurrentUser().isTeacher()) {
                return (
                   <TeacherHome/>
                );
            }
            return (<StudentHome />);
        }

        return (whichHome(this.props.profile));

    }
}

export default ClassHome;
