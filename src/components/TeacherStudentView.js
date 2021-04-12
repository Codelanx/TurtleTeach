import React from "react";
import './TeacherStudentView.css';
import {Row, Col, Button, Table} from "reactstrap";
import StudentLabel from "./StudentLabel";
import SearchBar from "./SearchBar";

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
                    <Row><SearchBar placeholder={"Search Students"}/></Row>
                    <Row className="text-font">For Selected:</Row>
                        <Row><Button color="success" size="lg">Send Auto-Login Email</Button></Row>
                        <Row><Button color="success" size="lg">Draft Email Message</Button></Row>
                    <Row className="text-font">Enter new Student emails, seperated by commas or newlines</Row>
                    <Row><input type="text" name="Enter Emails Here" ></input></Row>
                        <Row><Button color="success" size="lg" >Add New Students</Button></Row>
                    </Col>
                </Col>
            </Row>

        );
    }

}

export default TeacherStudentView;