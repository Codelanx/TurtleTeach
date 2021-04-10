import React from "react";
import './SearchBar.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class SearchBar extends React.Component {

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