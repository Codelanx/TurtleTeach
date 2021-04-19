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
        let list = [];
        for (let i = 0; i < 10; i++) {
            list.push(<StudentLabel checkbox={true} showEmail={true} lastOnline={true} />);
        }


        return (
            <Row>
                <Col sm={"12"} md={"6"}>
                    <Row><h1>Student Roster</h1></Row>
                    <Row className={"student-roster"}>
                        {list}
                    </Row>
                </Col>
                <Col sm={"12"} md={"6"} className={"area"}>
                    <Row className={"search"}>
                        <SearchBar placeholder={"Search Students"}/>
                    </Row>
                    <Row className="text-font col-12">For Selected:</Row>
                        <Row className={"spacing"}><TurtleButton expand>Send Auto-Login Email</TurtleButton></Row>
                        <Row className={"spacing"}><TurtleButton expand={true}>Draft Email Message</TurtleButton></Row>
                    <Row className="text-font col-12">Enter new Student emails, seperated by commas or newlines:</Row>
                    <Row className={"full-text-area"}><textarea id="emailArea" name="emailArea" rows="5" cols="75"/></Row>
                        <Row className={"spacing"}><TurtleButton expand>Add New Students</TurtleButton></Row>
                </Col>
            </Row>

        );
    }

}

export default TeacherStudentView;