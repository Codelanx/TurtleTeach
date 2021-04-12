import React from "react";
import './StudentAssignment.css';
import {Table, Col, Row} from "reactstrap";

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
                        TODO Add assignment cards
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