import React from "react";
import './ContentCard.css';
import {Card, CardImg, Button, Col, Row} from "reactstrap";
import { Link } from "react-router-dom";

class ContentCard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Card>

                    <div>
                        <CardImg src="/img/turtle.png" alt="this was supposed to be a turtle" width="100" height="350" />
                    </div>

                    <div id="BottomTextClass">
                        <Row >
                            <Col><a href={this.props.link} id="link" >{this.props.course}</a></Col>
                            <Col>{this.props.grade}</Col>
                            <Col className={"notifications"}>{this.props.notifications}</Col>
                        </Row>
                    </div>
                    <div>
                        {this.props.date}
                    </div>


                </Card>
                {this.props.text}
            </div>
        );
    }

}

export default ContentCard;