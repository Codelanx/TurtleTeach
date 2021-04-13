import React from "react";
import './CodeBlockSpace.css';
import {Col, Row} from "reactstrap";
import CodeBlock from "./CodeBlock";

class CodeBlockSpace extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col bgcolor="#b2d8b2">
                <Row><CodeBlock text={"Forward x"}/></Row>
                <Row><CodeBlock text={"Backward x"}/></Row>
                <Row><CodeBlock text={"Turn Right x"}/></Row>
                <Row><CodeBlock text={"Turn Left x"}/></Row>
                <Row><CodeBlock text={"If (Condition)"}/></Row>
                <Row><CodeBlock text={"Else"}/></Row>
                <Row><CodeBlock text={"Speed x"}/></Row>
                <Row><CodeBlock text={"Jump"}/></Row>
            </Col>
        );
    }

}

export default CodeBlockSpace;