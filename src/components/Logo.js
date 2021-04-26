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
                <img src="img/logo.png" alt="this was supposed to be our logo" width="113" height="71" />
                <img src="img/logo_inverted.png" alt="this was supposed to be our logo" width="113" height="71" />
                {this.props.text}
            </div>
        );
    }

}

export default Logo;