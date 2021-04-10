import React from "react";
import './CardLayout.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class CardLayout extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }

}

export default CardLayout;