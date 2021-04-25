import React from "react";
import './StudentGrades.css';
import {Button, Table, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
import TeacherAssignment from "./TeacherAssignment";

class StudentGrades extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Row>
                <Col xs={4}>
                    <Row className={"overall"}>Overall Grade</Row>
                    <Row className={"grade-font"}>B+</Row>
                </Col>
                <Col xs={8}>
                    <Row className={"label"}>
                        <Col xs={9}>Assignment</Col>
                        <Col xs={3}>Grade</Col>
                    </Row>
                    <Row className={"assignment"}>
                        <Col xs={9}>Turtle Slide</Col>
                        <Col xs={3}>B+</Col>
                    </Row>
                    <Row className={"assignment"}>
                        <Col xs={9}>Turtle Ride</Col>
                        <Col xs={3}>A-</Col>
                    </Row>
                    <Row className={"assignment"}>
                        <Col xs={9}>Turtle Hide</Col>
                        <Col xs={3}>C</Col>
                    </Row>
                    <Row className={"assignment"}>
                        <Col xs={9}>Turtle Died</Col>
                        <Col xs={3}>A+</Col>
                    </Row>
                </Col>
            </Row>
        );
    }

}

export default StudentGrades;