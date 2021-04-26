import React from "react";
import {Card, CardBody, CardImg, Col, Row} from "reactstrap";
import './Turtorial.css'
import {Link} from "react-router-dom";


class TutorialCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Card>
                <CardImg src="img/turtle.png" alt="this was supposed to be a turtle" className={"card-image"}/>
                <CardBody>
                    <Row>
                        <Col xs={"10"}>
                            <Row>
                                <Link>{this.props.title}</Link>
                            </Row>
                            <Row>
                                {this.props.date}
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        )
    }
}



class Tutorial extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (

        <Row>
            <Col ><TutorialCard title="How to Puzzle" date="Updated: 2/05/21"/></Col>
            <Col ><TutorialCard title="What Pieces Are" date="Updated: 3/14/21"/></Col>
            <Col ><TutorialCard title="What's An Assignment" date="Updated: 3/03/21"/></Col>
        </Row>

        );
    }

}

export default Tutorial;