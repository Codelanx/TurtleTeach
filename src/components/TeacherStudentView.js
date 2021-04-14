import React from "react";
import './TeacherStudentView.css';
import {Row, Col, Button, Table, CustomInput} from "reactstrap";
import StudentLabel from "./StudentLabel";
import SearchBar from "./SearchBar";
import TurtleButton from "./TurtleButton";

class TeacherStudentView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        for (let i = 0; i < 10; i++) {

        }


        return (
            <Row>
                <Col xs={"12"} md={"6"}>
                    <Row><h1>Student Roster</h1></Row>
                    <Row className={"student-roster"}>
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                        <StudentLabel checkbox={true} showEmail={true} lastOnline={true} />
                    </Row>
                </Col>
                <Col xs={"12"} md={"6"}>
                    <Row><SearchBar placeholder={"Search Students"}/></Row>
                    <Row className="text-font col-12">For Selected:</Row>
                        <Row><TurtleButton expand>Send Auto-Login Email</TurtleButton></Row>
                        <Row><TurtleButton expand={true}>Draft Email Message</TurtleButton></Row>
                    <Row className="text-font col-12">Enter new Student emails, seperated by commas or newlines</Row>
                    <Row><input type="text" name="Enter Emails Here" height="1000"/></Row>
                        <Row><TurtleButton expand>Add New Students</TurtleButton></Row>
                </Col>
            </Row>

        );
    }

}

export default TeacherStudentView;