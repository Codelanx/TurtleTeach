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
            <Col bgcolor="#999999">
                <Row><PlayButtons/></Row>
                <Row>   </Row>
                <Row>Debug Area</Row>
                <Row>   </Row>
                <Row>   </Row>
            </Col>
        );
    }

}

export default DebugSpace;