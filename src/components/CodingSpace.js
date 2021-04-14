import React from "react";
import './CodingSpace.css';
import {Col, Row} from "reactstrap";

class CodingSpace extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <Row className={"space"}>{this.props.text}</Row>
            </Col>
        );
    }

}

export default CodingSpace;