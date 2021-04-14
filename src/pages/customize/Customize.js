import React from 'react'
import './Customize.css';
import User from "../../User";
import SearchBar from "../../components/SearchBar";
import Button from "reactstrap";
import Swagponent from "../../components/Swagponent";


class Customize extends React.Component {
    render() {
        return (
            <div className="Customize">
                <h1>Turtle Customization</h1>
                <div>
                    <SearchBar/>
                </div>
            </div>
        );
    }
}

export default Customize;
