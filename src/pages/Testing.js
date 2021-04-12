import React from "react";
import {List, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import TeacherStudentView from "../components/TeacherStudentView";
import TeacherTab from "../components/TeacherTab";

class Testing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List>
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/test/component">Component Testing Page</Link>
                    </ListGroupItem>
                </ListGroup>
                <hr />
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/landing">Landing Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/login">Login Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/home">Home Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/course">Course Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/customize">Customize Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/sandbox">Sandbox Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/StudentHome">Student Home Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/TeacherHome">Teacher Home Page</Link>
                    </ListGroupItem>
                </ListGroup>
                <TeacherTab/>
            </List>

        );
    }

}

export default Testing;