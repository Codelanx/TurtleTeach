import React from "react";
import './PlayButtons.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class PlayButtons extends React.Component {

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

export default PlayButtons;