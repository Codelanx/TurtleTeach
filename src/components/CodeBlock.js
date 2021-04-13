import React from "react";
import './CodeBlock.css';
import {Row, Col, Container} from "reactstrap";
import {Link} from "react-router-dom";

class CodeBlock extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container bgcolor="#9999ff">
            <Row>
                {this.props.text}
            </Row>
            </Container>
        );
    }

}

export default CodeBlock;