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
            <Col bgcolor="#999999" className={"debugspace"}>
                <Row className={"text"}><Col xs={2}/><Col xs={8}><PlayButtons/></Col><Col xs={2}/></Row>
                <Row className={"text"}><Col xs={2}/><Col xs={8}>Debug Area</Col><Col xs={2}/></Row>
            </Col>
        );
    }

}

export default DebugSpace;