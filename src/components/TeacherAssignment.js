import React from "react";
import './TeacherAssignment.css';
import {Table} from "reactstrap";

class TeacherAssignment extends React.Component {

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
                    <th>Graded</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                <tr bgcolor="#00ff00">
                    <td>Swagatoni</td>
                    <td>03/24</td>
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

        );
    }

}

export default TeacherAssignment;