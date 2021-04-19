import React from "react";
import './TeacherAssignment.css';
import {Row, Col, UncontrolledCollapse} from "reactstrap";
import {Link} from "react-router-dom";

function PuzzleListing(props) {
    return (
        <React.Fragment>
            <Row className={"assignments-course"}>
                <Col xs={"1"} className={"Collapse"} id={props.name}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                         className="bi bi-arrows-collapse" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"/>
                    </svg></Col>
                <Col xs={"5"}>{props.name}</Col>
                <Col xs={"2"}>{props.completed}</Col>
                <Col xs={"2"}>{props.evaluated}</Col>
                <Col xs={"2"}>{props.date}</Col>
            </Row>
            <UncontrolledCollapse toggler={props.toggler} defaultOpen={"True"}>{props.children}</UncontrolledCollapse>

        </React.Fragment>
    );
}

function StudentListing(props) {
    return (
        <Row className={"assignments-puzzle"}>
            <Col xs={"5"}><Link to={"/puzzle/123"} id="link">{props.name}</Link></Col>
            <Col xs={"2"}>{props.completed}</Col>
            <Col xs={"2"}>{props.evaluated}</Col>
            <Col xs={"2"}>{props.date}</Col>
        </Row>
    );
}


class TeacherGrades extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <React.Fragment>
                <Row className={"category"}>
                    <Col xs={"6"}>Assignment</Col>
                    <Col xs={"2"}>Completed</Col>
                    <Col xs={"2"}>Evaluated</Col>
                    <Col xs={"2"}>Due Date</Col>
                </Row>
                <PuzzleListing name={"Escape"}
                               evaluated={"3/4"}
                               completed={"2/4"}
                               date={"04-13-21"}
                                toggler={"#Escape"}>
                    <StudentListing name={"Jimmy Longbottom"}
                                    completed={"Yes"}
                                    evaluated={"Published"}
                                    date={"On-time"} />
                    <StudentListing name={"Katty Brett"}
                                    completed={"Yes"}
                                    evaluated={"Draft Saved"}
                                    date={"On-time"} />
                    <StudentListing name={"Sandy Cheeks"}
                                    completed={"Yes"}
                                    evaluated={"Unread"}
                                    date={"2 hr. late"} />
                    <StudentListing name={"Lewis Yeeticus"}
                                    completed={"No"}
                                    evaluated={"Unread"}
                                    date={"D.N.F"} />
                </PuzzleListing>
                <PuzzleListing name={"Flipster"}
                               evaluated={"0/4"}
                               completed={"1/4"}
                               date={"04-25-21"}
                                toggler={"#Flipster"}>
                    <StudentListing name={"Jimmy Longbottom"}
                                    completed={"Yes"}
                                    evaluated={"Unread"}
                                    date={"On-time"} />
                    <StudentListing name={"Katty Brett"}
                                    completed={"No"}
                                    evaluated={"-"}
                                    date={"-"} />
                    <StudentListing name={"Sandy Cheeks"}
                                    completed={"No"}
                                    evaluated={"-"}
                                    date={"-"} />
                    <StudentListing name={"Lewis Yeeticus"}
                                    completed={"No"}
                                    evaluated={"-"}
                                    date={"-"} />
                </PuzzleListing>
            </React.Fragment>

        );
    }

}

export default TeacherGrades;