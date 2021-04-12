import React from "react";
import './TurtleButton.css';
import {Badge, Button, Input, InputGroup, Nav, NavItem, NavLink} from "reactstrap";

class TurtleButton extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {


        function changeBackground(e) {
            e.target.style.background = '#6E00A5';
        }

        function originalBackground(e) {
            e.target.style.background = '#AF11FF';
        }

        return (
            <Button onMouseOver={changeBackground} onMouseLeave={originalBackground} type="button" size="lg" value="CLICK ME">

            </Button>
        );
    }

}

export default TurtleButton;