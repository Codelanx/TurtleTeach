import React from "react";
import './Navigation.css';
import {Badge, Button, Input, InputGroup, Nav, NavItem, NavLink} from "reactstrap";

class TurtleButton extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const buttonStyle = {
            backgroundColor: this.props.color,
            color: '#AF11FF',
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            border: "none",
            borderRadius: "80px",
            fontSize: "11px",
            outline: "none",
            marginLeft: this.props.marginLeft,
            width : this.props.width,
            height : this.props.height
        };

        function changeBackground(e) {
            e.target.style.background = '#6E00A5';
        }

        function originalBackground(e) {
            e.target.style.background = '#AF11FF';
        }

        return (
            <TurtleButton onMouseOver={changeBackground} onMouseLeave={originalBackground} style={buttonStyle} type="button" value={this.props.value}>

            </TurtleButton>
        );
    }

}

export default TurtleButton;