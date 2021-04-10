import React from "react";
import {List, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";

class Testing extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <List>
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/landing">Landing Page</Link><br/>
                        <Link to="/login">Login Page</Link><br/>
                        <Link to="/home">Home Page</Link><br/>
                        <Link to="/course">Course Page</Link><br/>
                        <Link to="/customize">Customize Page</Link><br/>
                        <Link to="/sandbox">Sandbox Page</Link><br/>
                        <Link to="/test/component">Component Testing Page</Link>
                    </ListGroupItem>
                </ListGroup>
                <hr />
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/landing">Landing Page</Link>
                    </ListGroupItem>
                </ListGroup>
            </List>
        );
    }

}

export default Testing;