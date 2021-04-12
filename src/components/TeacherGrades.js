import React from "react";
import './TeacherAssignment.css';
import {Table} from "reactstrap";

class TeacherGrades extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
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

        );
    }

}

export default TeacherGrades;