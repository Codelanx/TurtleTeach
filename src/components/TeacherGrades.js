import React, {useState} from "react";
import './TeacherAssignment.css';
import {Row, Col, Collapse} from "reactstrap";
import {Link} from "react-router-dom";

function PuzzleListing(props) {
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
            <Row className={"assignments-course"}>
                <Col xs={"1"} className={"Collapse"} onClick={toggle}>
                    {icon}
                </Col>
                <Col xs={"5"}>{props.name}</Col>
                <Col xs={"2"}>{props.completed}</Col>
                <Col xs={"2"}>{props.evaluated}</Col>
                <Col xs={"2"}>{props.date}</Col>
            </Row>
            <Collapse isOpen={open}>
                {props.children}
            </Collapse>

        </React.Fragment>
    );
}

function StudentListing(props) {
    return (
        <Row className={"assignments-puzzle"}>
            <Col xs={"2"}><span>&nbsp;</span></Col>
            <Col xs={"4"}><Link to={"/puzzle/123"} id="link">{props.name}</Link></Col>
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