import React from "react";
import './TurtleButton.css';
import {Badge, Button, Input, InputGroup, Nav, NavItem, NavLink} from "reactstrap";

class TurtleButton extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        let out = "turtle-button";
        if (this.props.expand) {
            out += " col-12 turtle-button-expanded";
        }

        return (
            <Button className={out} >
                {this.props.children}
            </Button>
        );
    }

}

export default TurtleButton;