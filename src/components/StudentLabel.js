import React from "react";
import './StudentLabel.css';
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import ContentCard from "./ContentCard";

class StudentLabel extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Row>
                <Col xs={"3"} className={"student-roster-img"}>
                    <img src="/img/turtle.png" alt="this was supposed to be a turtle" className={"student-roster-image"} />
                </Col>
                <Col xs={"6"}>
                    <a href="#" className={"student-roster-link"}>{this.props.you} Student Name</a>
                    <br />
                    <i>student@email.com</i>
                </Col>
                <Col xs={"3"}>
                    Last Online:
                    <br />
                    Jan-20-21
                </Col>
            </Row>
        );
    }
}

export default StudentLabel;