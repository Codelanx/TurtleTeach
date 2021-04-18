import React from "react";
import './TurtleButton.css';
import {Badge, Button, Input, InputGroup, Nav, NavItem, NavLink} from "reactstrap";

function TurtleButton(props) {
    let out = "";
    if (props.className) {
        out = props.className;
    }
    if (out.length > 0) {
        out += " ";
    }
    out += "turtle-button";
    if (props.expand) {
        out += " col-12 turtle-button-expanded";
    }
    if (props.medium) {
        out += " turtle-button-medium";
    }

    return (
        <Button className={out} >
            {props.children}
        </Button>
    );
}

export default TurtleButton;