import React from "react";
import './StundentLabel.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class StundentLabel extends React.Component {

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