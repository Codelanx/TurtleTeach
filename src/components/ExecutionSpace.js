import React from "react";
import './ExecutionSpace.css';
import {Col, Row} from "reactstrap";

class ExecutionSpace extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col className={"executionspace"}>
                <p className={"text"}>Execution Area - Turtle Space</p>
            </Col>
        );
    }

}

export default ExecutionSpace;