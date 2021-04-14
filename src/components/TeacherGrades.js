import React from "react";
import './TeacherAssignment.css';
import {Row, Col, UncontrolledCollapse} from "reactstrap";

function PuzzleListing(props) {
    return (
        <React.Fragment>
            <Row className={"assignments-course"}>
                <Col xs={"6"}><a href="#" id={props.name}>{props.name}</a></Col>
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
            <Col xs={"5"}><a href="/DevEnvironment" id="link">{props.name}</a></Col>
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
                <PuzzleListing name={"Swagscape"}
                               evaluated={"3/4"}
                               completed={"2/4"}
                               date={"04-13-21"}
                                toggler={"#Swagscape"}>
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