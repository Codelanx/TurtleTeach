import React from "react";
import './StudentGrades.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class StudentGrades extends React.Component {

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