import React from "react";
import './StudentAssignment.css';
import './ContentCard';
import {Assignment} from "../data/Course";
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
                <Row className={"stripe"}><Col xs={9}>Tarantula Trap</Col><Col xs={3}>Grade: A-</Col>
                </Row>
                <Row className={"white"}><Col xs={9}>Slow and Curious</Col><Col xs={3}>Grade: B</Col>
                </Row>
                <Row className={"stripe"}><Col xs={9}>Blue Lagoon</Col><Col xs={3}>Grade: C+</Col>
                </Row>
            </Col>
        );
    }
}


class StudentAssignment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let assignments = Assignment.getAssignments();

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
                        <Col><ContentCard course={assignments[0]}/></Col>
                        <Col><ContentCard course={assignments[2]}/></Col>
                        <Col><ContentCard course={assignments[1]}/></Col>
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