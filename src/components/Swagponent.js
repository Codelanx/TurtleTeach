import React from "react";
import './Swagponent.css';

class Swagponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <img id="swag" alt="a picture of swag" src={this.props.pathname}/>
            </div>
        );
    }

}

export default Swagponent;