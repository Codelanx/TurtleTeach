import React from "react";
import './ExecutionSpace.css';
import {Col, Row} from "reactstrap";

class Instuructions extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col bgcolor="#ffffcc">
                <Row>   </Row>
                <Row>Instructions Area</Row>
                <Row>   </Row>
                <Row>   </Row>
            </Col>
        );
    }

}

export default Instuructions;