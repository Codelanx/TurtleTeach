import React from "react";
import {Col, Row} from "reactstrap";
import ContentCard from "./ContentCard";


class Tutorial extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (

        <Row>
            <Col><ContentCard course="How To Puzzle" date="Updated: 4/10"/></Col>
            <Col><ContentCard course="What Pieces Are" date="Updated: 3/14"/></Col>
            <Col><ContentCard course="What's An Assignment" date="Updated: 3/03"/></Col>
        </Row>

        );
    }

}

export default Tutorial;