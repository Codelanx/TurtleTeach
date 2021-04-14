import React from "react";
import './Instructions.css';
import {Col, Row} from "reactstrap";

class Instuructions extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col className={"instructionsspace"}>
                <p className={"text"}>Instructions Area</p>
            </Col>
        );
    }

}

export default Instuructions;