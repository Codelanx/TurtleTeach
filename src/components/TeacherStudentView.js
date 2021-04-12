import React from "react";
import './TeacherStudentView.css';
import {Row, Col, Container, Table} from "reactstrap";
import StudentLabel from "./StudentLabel";
/*import TurtleButton from "./TurtleButton";*/

class TeacherStudentView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Row>
                <Col>
                    <Row><h1>Student Roster</h1></Row>
                    <Row>
                        <Table bordered>
                            <tbody>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            <tr>
                                <th scope="row"><StudentLabel/></th>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Col>
                <Col>
                    <Col xs={12}>
                    <Row>TODO Add search bar</Row>
                    <Row className="text-font">For Selected:</Row>

                    <Row className="text-font">Enter new Student emails, seperated by commas or newlines</Row>
                    <Row><input type="text" name="Enter Emails Here" ></input></Row>
                    </Col>
                </Col>
            </Row>

        );
    }

}

export default TeacherStudentView;