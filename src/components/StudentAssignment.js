import React from "react";
import './StudentAssignment.css';
import './ContentCard';
import {Table, Col, Row, Container} from "reactstrap";
import ContentCard from "./ContentCard";

class UpcomingAssignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>

                <Row className={"categories"}>Upcoming Assignments
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
                <Row className={"categories"}>Past Assignments
                </Row>
            <Table striped>
                <tbody>
                <tr><th scope="row">Slow and Curious</th></tr>
                <tr><th scope="row">Tarantula Trap</th></tr>
                <tr><th scope="row">Blue Lagoon</th></tr>
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
            // <Container>
            // <Row>
            //     <Col>Current Puzzles</Col>
            //     <Col>Upcoming Puzzles</Col>
            // </Row>
            //     <Row></Row>
            // </Container>
            <Table borderless>
                <tr>
                    <td>
                        <Row>
                        <Col><ContentCard course="Ring of Fire" date="Due Date: 4/14" link={"/DevEnvironment"}/></Col>
                        <Col><ContentCard course="Surfin' the EAC" date="Due Date: 4/20" link={"/DevEnvironment"}/></Col>
                        <Col><ContentCard course="Deep Diving" date="Due Date: 4/24" link={"/DevEnvironment"}/></Col>
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