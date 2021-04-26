import React from "react";
import './StudentLabel.css';
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import ContentCard from "./ContentCard";

class StudentLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: false};
    }

    check = () => {
        console.log("check method");
        this.setState({checked: !this.state.checked});
    };

    render() {
        let checkbox = null;
        if (!!this.props.checkbox) {
            let box;
            if (this.state.checked) {
                box = (<input type={"checkbox"} style={{height: "100%"}} checked/>);
            } else {
                box = (<input type={"checkbox"} style={{height: "100%"}} />);
            }
            checkbox = (
                <Col xs={"1"} className={"fix-height"}>
                    {box}
                </Col>
            );
        }
        let showEmail = this.props.showEmail === true
            ? (<React.Fragment><br /><i>student@email.com</i></React.Fragment>)
            : null;
        let end = this.props.lastOnline === undefined ? null : (
            <Col xs={"hidden"} md={"3"}>
                Last Online:
                <br />
                Jan-20-21
            </Col>
        );
        let textWidth = end === null ? "8" : "5";
        return (
            <Row className="mainContainer" onClick={this.check}>
                {checkbox}
                <Col xs={"3"} className={"fix-height student-roster-img"}>
                    <img src="img/turtle.png" alt="this was supposed to be a turtle" className={"student-roster-image"} />
                </Col>
                <Col xs={textWidth}>
                    <a href="#" className={"student-roster-link"}>{this.props.you} Student Name</a>
                    {showEmail}
                </Col>
                {end}
            </Row>
        );
    }
}

export default StudentLabel;