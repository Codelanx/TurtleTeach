import React from "react";
import './CodingSpace.css';
import {Col, Row} from "reactstrap";

class CodingSpace extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col className={"codespace"}>
                <p className={"text"}>{this.props.text}</p>
            </Col>
        );
    }

}

export default CodingSpace;