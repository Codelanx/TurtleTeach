import React from "react";
import './TeacherAssignment.css';
import {Col, Row, Table, UncontrolledCollapse} from "reactstrap";
import TurtleButton from "./TurtleButton";

function CourseListing(props) {
    return (
        <React.Fragment>
            <Row className={"assignments-course"}>
                <Col xs={"6"}><a href="#" id={props.id}>{props.name}</a></Col>
                <Col xs={"2"}>{props.completed}</Col>
                <Col xs={"2"}>{props.graded}</Col>
                <Col xs={"2"}>{props.date}</Col>
            </Row>
            <UncontrolledCollapse toggler={props.toggler} defaultOpen={"True"}>{props.children}</UncontrolledCollapse>

        </React.Fragment>
    );
}

function PuzzleListing(props) {
    return (
        <Row className={"assignments-puzzle"}>
            <Col xs={"5"}>{props.name}</Col>
            <Col xs={"2"}>{props.completed}</Col>
            <Col xs={"2"}>{props.graded}</Col>
            <Col xs={"2"}>{props.date}</Col>
        </Row>
    );
}

class TeacherAssignment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <React.Fragment>
                <Row>
                    <Col xs={4} md={3}><TurtleButton medium>Find New Courses</TurtleButton></Col>
                    <Col xs={4} md={3}><TurtleButton medium>Find New Puzzles</TurtleButton></Col>
                    <Col xs={4} md={3}><TurtleButton medium>Edit Assignments</TurtleButton></Col>
                </Row>
                <Row className={"category"}>
                    <Col xs={"6"}>Assignment</Col>
                    <Col xs={"2"}>Completed</Col>
                    <Col xs={"2"}>Graded</Col>
                    <Col xs={"2"}>Due Date</Col>
                </Row>
            <CourseListing name={"Swagatoni"}
                           completed={"03/24"}
                           graded={"02/24"}
                           date={"04-30-21"}
                           id={"Swagatoni"}
                            toggler={"#Swagatoni"}>
                <PuzzleListing name={"Swag Flip"}
                               completed={"03/24"}
                               graded={"02/24"}
                               date={"04-30-21"} />
                <PuzzleListing name={"Swagscape"}
                               completed={"20/24"}
                               graded={"18/24"}
                               date={"04-20-21"} />
                <PuzzleListing name={"Swag Slide"}
                               completed={"15/24"}
                               graded={"10/24"}
                               date={"04-14-21"} />
            </CourseListing>
                <CourseListing name={"Turtle Gets Milk"}
                               completed={"15/24"}
                               graded={"10/24"}
                               date={"04-12-21"}
                               id={"TurtleGetsMilk"}
                               toggler={"#TurtleGetsMilk"}>
                    <PuzzleListing name={"Let Your Family Know"}
                                   completed={"23/24"}
                                   graded={"23/24"}
                                   date={"04-01-21"} />
                    <PuzzleListing name={"Leave For Store"}
                                   completed={"22/24"}
                                   graded={"21/24"}
                                   date={"04-03-21"} />
                    <PuzzleListing name={"Walk To Store"}
                                   completed={"21/24"}
                                   graded={"17/24"}
                                   date={"04-05-21"} />
                    <PuzzleListing name={"Buy The Milk"}
                                   completed={"15/24"}
                                   graded={"10/24"}
                                   date={"04-10-21"} />
                </CourseListing>
            </React.Fragment>

        );
    }

}

export default TeacherAssignment;