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
        let checkbox = this.props.checkbox === true
            ? (<Col xs={"1"} className={"fix-height"}>
                <input type={"checkbox"} style={{height: "100%"}} />
            </Col>)
            : null;
        let showEmail = this.props.showEmail === true
            ? (<React.Fragment><br /><i>student@email.com</i></React.Fragment>)
            : null;
        let end = this.props.lastOnline === undefined ? null : (
            <Col xs={"hidden"} md={"3"}>
                Last Online:
                <br />
                Jan-20-21
            </Col>
        );
        let textWidth = end === null ? "8" : "5";
        return (
            <Row className="mainContainer">
                {checkbox}
                <Col xs={"3"} className={"fix-height student-roster-img"}>
                    <img src="/img/turtle.png" alt="this was supposed to be a turtle" className={"student-roster-image"} />
                </Col>
                <Col xs={textWidth}>
                    <a href="#" className={"student-roster-link"}>{this.props.you} Student Name</a>
                    {showEmail}
                </Col>
                {end}
            </Row>
        );
    }
}

export default StudentLabel;