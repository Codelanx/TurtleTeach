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
            <Col className={"space"}>
                <p className={"text"}>Pieces</p>
                <Row><CodeBlock text={"Forward x"}/></Row>
                <Row><CodeBlock text={"Backward x"}/></Row>
                <Row><CodeBlock text={"Turn Right x"}/></Row>
                <Row><CodeBlock text={"Turn Left x"}/></Row>
            </Col>
        );
    }

}

export default CodeBlockSpace;