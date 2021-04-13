import React from "react";
import './StudentAssignment.css';
import './ContentCard';
import {Table, Col, Row} from "reactstrap";
import ContentCard from "./ContentCard";

class UpcomingAssignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>

                <Row>Upcoming Assignments
                </Row>
                <Table striped>
                    <tbody>
                    <tr><th scope="row">Turn Right Ahead</th></tr>
                    <tr><th scope="row">Turtle Don't Dead</th></tr>
                    <tr><th scope="row">Turtle Gets Wed</th></tr>
                    <tr><th scope="row">Squirtle Turns Red</th></tr>
                    <tr><th scope="row">Turtle to Bed</th></tr>
                    <tr><th scope="row">Time to Get Fed</th></tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}


class PreviousAssignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <Row>Past Assignments
                </Row>
            <Table striped>
                <tbody>
                <tr><th scope="row">Swag Flip</th></tr>
                <tr><th scope="row">Swag Slide</th></tr>
                <tr><th scope="row">Swagscape</th></tr>
                </tbody>
            </Table>
            </Col>
        );
    }
}


class StudentAssignment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Table borderless>
                <tr>
                    <td>
                        <Row>
                        <Col><ContentCard course="Ring of Fire" date="Due Date: 4/14"/></Col>
                        <Col><ContentCard course="Surfin' the EAC" date="Due Date: 4/20"/></Col>
                        <Col><ContentCard course="Deep Diving" date="Due Date: 4/24"/></Col>
                        </Row>
                    </td>
                    <td rowSpan={2}>
                        <UpcomingAssignment/>
                    </td>
                </tr>
                <tr>
                    <PreviousAssignment/>
                </tr>


            </Table>

        );
    }

}

export default StudentAssignment;