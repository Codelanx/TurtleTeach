import React from "react";
import './CodingSpace.css';
import {Col, Row} from "reactstrap";

class CodingSpace extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col bgcolor="#FFE4B2">
                <Row>   </Row>
                <Row>{this.props.text}</Row>
                <Row>   </Row>
                <Row>   </Row>
            </Col>
        );
    }

}

export default CodingSpace;