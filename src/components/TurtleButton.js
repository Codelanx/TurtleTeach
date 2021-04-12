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
            <TurtleButton onMouseOver={changeBackground} onMouseLeave={originalBackground} classname={"buttonStyle"} type="button" value={this.props.value}>

            </TurtleButton>
        );
    }

}

export default TurtleButton;