import React from 'react'
import './Customize.css';
import User from "../../data/User";
import SearchBar from "../../components/SearchBar";
import {Button, ButtonGroup} from "reactstrap";
import Swagponent from "../../components/Swagponent";


class Customize extends React.Component {
    render() {
        return (
            <div className="Customize">
                <h1>Turtle Customization</h1>
                <div>
                    <SearchBar/>
                </div>
                <Button>Save</Button>
            </div>
        );
    }
}

export default Customize;
