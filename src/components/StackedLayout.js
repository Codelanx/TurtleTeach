import React from "react";
import './StackedLayout.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class StackedLayout extends React.Component {

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