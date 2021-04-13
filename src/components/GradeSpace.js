import React from "react";
import './GradeSpace.css';
import {Row, Col, Button} from "reactstrap";
import PlayButtons from "./PlayButtons";
import {Link} from "react-router-dom";

class GradeSpace extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Col bgcolor="#ffccccc">
                <Row><PlayButtons/></Row>
                <Row>   </Row>
                <Row>Student: Jimmy Longbottom</Row>
                <Row>
                    <Col>Grade: [</Col>
                    <Col><input type="text" name="Grade" width="10" /></Col>
                    <Col>]/100</Col>
                </Row>
                <Row><Button tag={Link} to="/ClassHome">Submit Grade</Button></Row>
            </Col>
        );
    }

}

export default GradeSpace;