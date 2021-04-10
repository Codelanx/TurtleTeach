import React from "react";
import './Logo.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class Logo extends React.Component {

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

export default Logo;