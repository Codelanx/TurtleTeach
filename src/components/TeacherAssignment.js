import React, {useState} from "react";
import './TeacherAssignment.css';
import {Col, Collapse, Row} from "reactstrap";
import TurtleButton from "./TurtleButton";

function CourseListing(props) {

    //expanded.push(props.id);
    const [open, setOpen] = useState(true);

    const toggle = () => setOpen(!open);
    let icon;
    if (open) {
        icon = (<i className={"bi bi-arrows-collapse"} />);
    } else {
        icon = (<i className={"bi bi-arrows-expand"} />);
    }

    return (
        <React.Fragment>
            <Row className={"assignments assignments-course"}>
                <Col xs={"1"} className={"collapse-button"} onClick={toggle}>
                    {icon}
                </Col>
                <Col xs={"5"}>{props.name}</Col>
                <Col xs={"2"}>{props.completed}</Col>
                <Col xs={"2"}>{props.graded}</Col>
                <Col xs={"2"}>{props.date}</Col>
            </Row>
            <Collapse isOpen={open}>
                {props.children}
            </Collapse>

        </React.Fragment>
    );
}

function PuzzleListing(props) {
    return (
        <Row className={"assignments assignments-puzzle"}>
            <Col xs={"2"}><span>&nbsp;</span></Col>
            <Col xs={"4"}>{props.name}</Col>
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