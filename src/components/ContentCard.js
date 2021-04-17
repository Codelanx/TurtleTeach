import React from "react";
import './ContentCard.css';
import {Card, CardImg, Button, Col, Row, CardBody} from "reactstrap";
import { Link } from "react-router-dom";

class ContentCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImg src="/img/turtle.png" alt="this was supposed to be a turtle" width="100" height="350" />
                <CardBody>
                    <Row>
                        <Col xs={"10"}>
                            <Row>
                                <Link to={"/class/" + this.props.course.id}>{this.props.course.title}</Link>
                            </Row>
                            <Row>
                                {this.props.course.dates}
                            </Row>
                        </Col>
                        <Col xs={"2"}>
                            {this.props.course.currentGrade}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }

}

export default ContentCard;