import React from "react";
import './ExecutionSpace.css';
import {Col, Row} from "reactstrap";

class ExecutionSpace extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col bgcolor="#FFFFFF" className={"space"}>
                <Row className={"text"}>Execution Area - Turtle Space</Row>
            </Col>
        );
    }

}

export default ExecutionSpace;