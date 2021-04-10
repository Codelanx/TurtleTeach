import React from "react";
import './CodeBlock.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class CodeBlock extends React.Component {

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

export default CodeBlock;