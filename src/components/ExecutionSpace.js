import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class ExecutionSpace extends React.Component {

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

export default ExecutionSpace;