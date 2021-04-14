import React from "react";
import './DebugSpace.css';
import {Col, Row} from "reactstrap";
import PlayButtons from "./PlayButtons";

class DebugSpace extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col bgcolor="#999999" className={"space"}>
                <Row><PlayButtons/></Row>
                <Row className={"text"}>Debug Area</Row>
            </Col>
        );
    }

}

export default DebugSpace;