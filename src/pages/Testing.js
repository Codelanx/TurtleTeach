import React from "react";
import {List, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import ContentCard from "../components/ContentCard";

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
                        <Link to="/">Home Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/landing">Landing Page</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/login">Login Page</Link>
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
                        <Link to="/puzzle/123">Dev Environment</Link>
                    </ListGroupItem>
                </ListGroup>
                {/* ContentCard */}
            </List>

        );
    }

}

export default Testing;