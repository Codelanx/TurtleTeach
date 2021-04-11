import React from "react";
import './AssignmentLabel.css';


class AssignmentLabel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
                <row>
                    {this.props.value}
                </row>
        );
    }

}

export default AssignmentLabel;