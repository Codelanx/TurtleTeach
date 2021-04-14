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
            <Container>
            <Row style={{backgroundColor: '#9999ff'}} className={"piece"}>
                <span className={"piece"}>{this.props.text}</span>
            </Row>
            </Container>
        );
    }

}

export default CodeBlock;