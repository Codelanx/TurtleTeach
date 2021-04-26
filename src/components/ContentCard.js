import React from "react";
import './ContentCard.css';
import {Card, CardImg, Button, Col, Row, CardBody} from "reactstrap";
import {Redirect, useHistory} from "react-router";
import { Link } from "react-router-dom";

function CardBadge(props) {
    return (
        <div className={"card-notif-badge"}>
            {props.children}
        </div>
    );
}


class ContentCard extends React.Component {

    constructor(props) {
        super(props);
        this.showBadge = !!props.showBadge;
        this.showGrade = !!props.showGrade;
    }

    redirect(course) {
        let next = "/class/" + course.id;
        //TODO Make this function work
    }

    render() {
        let notif = null;
        if (this.showBadge && this.props.course.teacherNotifCount) {
            notif = (<CardBadge>{this.props.course.teacherNotifCount}</CardBadge>);
        }
        let grade = null;
        let textSize = "12";
        if (this.showGrade) {
            textSize = "9";
            grade = (
                <Col xs={"3"} className={"gradeText"}>
                    {this.props.course.currentGrade}
                </Col>
            );
        }
        return (
            <Card onClick={this.redirect(this.props.course)}>
                <CardImg src="/img/turtle.png" alt="this was supposed to be a turtle" className={"card-image"}/>
                <CardBody>
                    <Row>
                        <Col xs={textSize} className={"card-text"}>
                            <Row>
                                <Link to={this.props.course.link}>{this.props.course.title}</Link>
                            </Row>
                            <Row>
                                {this.props.course.dates}
                            </Row>
                        </Col>
                        {grade}
                    </Row>
                </CardBody>
                {notif}
            </Card>
        );
    }

}

export default ContentCard;