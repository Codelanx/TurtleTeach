import React from "react";
import './TeacherAssignment.css';
import {Col, Row, UncontrolledCollapse} from "reactstrap";
import TurtleButton from "./TurtleButton";





function CourseListing(props) {

    //expanded.push(props.id);

    return (
        <React.Fragment>
            <Row>
                <Col xs={1} className={"Collapse"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrows-collapse" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"/>
                    </svg></Col>
                <Col xs={"5"} className={"assignments-course"}>{props.name}</Col>
                <Col xs={"2"} className={"assignments-course"}>{props.completed}</Col>
                <Col xs={"2"} className={"assignments-course"}>{props.graded}</Col>
                <Col xs={"2"} className={"assignments-course"}>{props.date}</Col>
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
            <CourseListing name={"Dodge Ball"}
                           completed={"03/24"}
                           graded={"02/24"}
                           date={"04-30-21"}
                           id={"DodgeBall"}
                            toggler={"#DodgeBall"}>
                <PuzzleListing name={"Dodge the Dog"}
                               completed={"03/24"}
                               graded={"02/24"}
                               date={"04-30-21"} />
                <PuzzleListing name={"Dodge the Cat"}
                               completed={"20/24"}
                               graded={"18/24"}
                               date={"04-20-21"} />
                <PuzzleListing name={"Dodge the Ball"}
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
                    <PuzzleListing name={"Go Home"}
                                   completed={"14/24"}
                                   graded={"10/24"}
                                   date={"04-15-21"} />
                </CourseListing>
            </React.Fragment>

        );
    }

}

export default TeacherAssignment;