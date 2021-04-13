import React from "react";
import './ExecutionSpace.css';
import {Col, Row} from "reactstrap";

class ExecutionSpace extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col bgcolor="#FFFFFF">
                <Row>   </Row>
                <Row>Execution Area - Turtle Space</Row>
                <Row>   </Row>
                <Row>   </Row>
            </Col>
        );
    }

}

export default ExecutionSpace;