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
                        <Link to="/landing">Landing Page</Link>
                    </ListGroupItem>
                </ListGroup>
            </List>
        );
    }

}

export default Testing;