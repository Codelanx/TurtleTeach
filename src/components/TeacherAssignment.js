import React from "react";
import './TeacherAssignment.css';
import {Col, Row, Table} from "reactstrap";

function CourseListing(props) {
    return (
        <React.Fragment>
        <Row className={"assignments-course"}>
            <Col xs={"6"}>{props.name}</Col>
            <Col xs={"2"}>{props.completed}</Col>
            <Col xs={"2"}>{props.graded}</Col>
            <Col xs={"2"}>{props.date}</Col>
        </Row>
        {props.children}
        </React.Fragment>
    );
}

function PuzzleListing(props) {
    return (
        <Row className={"assignments-puzzle"}>
            <Col xs={"5"}>{props.name}</Col>
            <Col xs={"2"}>{props.completed}</Col>
            <Col xs={"2"}>{props.graded}</Col>
            <Col xs={"2"}>{props.date}</Col>
        </Row>
    );
}

class TeacherAssignment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <React.Fragment>
            <CourseListing name={"Swagatoni"}
                           completed={"03/24"}
                           graded={"02/24"}
                           date={"04-30-21"}>
                <PuzzleListing name={"Swagatoni"}
                               completed={"03/24"}
                               graded={"02/24"}
                               date={"04-30-21"} />
            </CourseListing>
            <Table bordered>
                <thead>
                <tr>
                    <th>Assignment</th>
                    <th>Completed</th>
                    <th>Graded</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                <tr bgcolor="#00ff00">
                    <td></td>
                    <td></td>
                    <td>02/24</td>
                    <td>04/30/21</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>Swag Flip</td>
                    <td>20/24</td>
                    <td>18/24</td>
                    <td>04/20/21</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>Swag Slide</td>
                    <td>15/24</td>
                    <td>10/24</td>
                    <td>04/25/21</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>Swagscape</td>
                    <td>04/24</td>
                    <td>02/24</td>
                    <td>04/30/21</td>
                </tr>
                </tbody>
            </Table>
            </React.Fragment>

        );
    }

}

export default TeacherAssignment;