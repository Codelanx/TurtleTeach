import React from "react";
import './StudentGrades.css';
import {Button, Table, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
import TeacherAssignment from "./TeacherAssignment";

class StudentGrades extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Row>
                <Col xs={2}>
                    <Table bordered>
                        <thead>
                        <th>Overall Grade</th>
                        </thead>
                        <tbody>
                            <th className={"grade-font"}>B+</th>
                        </tbody>
                    </Table>
                </Col>
                <Col xs={8}>
            <Table bordered>
                <thead>
                <tr>
                    <th>Assignment</th>
                    <th>Completed</th>
                    <th>Evaluated</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                <tr bgcolor="#00FF00">
                    <td>Swagatoni</td>
                    <td>3/4</td>
                    <td>2/4</td>
                    <td>04/20/21</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>User01</td>
                    <td>Yes</td>
                    <td>Published</td>
                    <td>On-Time</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>User02</td>
                    <td>Yes</td>
                    <td>Draft Saved</td>
                    <td>On-Time</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>User03</td>
                    <td>Yes</td>
                    <td>Unread</td>
                    <td>2 hr. late</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td>User04</td>
                    <td>No</td>
                    <td>Unread</td>
                    <td>D.N.F</td>
                </tr>
                </tbody>
            </Table>
                </Col>
            </Row>
        );
    }

}

export default StudentGrades;