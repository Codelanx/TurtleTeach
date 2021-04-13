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
                    <td><a href={"/DevEnvironment"} id="link" >User01</a></td>
                    <td>Yes</td>
                    <td>Published</td>
                    <td>On-Time</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td><a href={"/DevEnvironment"} id="link" >User02</a></td>
                    <td>Yes</td>
                    <td>Draft Saved</td>
                    <td>On-Time</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td><a href={"/DevEnvironment"} id="link" >User03</a></td>
                    <td>Yes</td>
                    <td>Unread</td>
                    <td>2 hr. late</td>
                </tr>
                <tr bgcolor="#bbbbbb">
                    <td><a href={"#top"} id="link" >User04</a></td>
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