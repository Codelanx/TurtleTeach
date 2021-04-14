import React from "react";
import './Instructions.css';
import {Col, Row} from "reactstrap";

class Instuructions extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col bgcolor="#ffffcc" className={"space"}>
                <Row className={"text"}>Instructions Area</Row>
            </Col>
        );
    }

}

export default Instuructions;