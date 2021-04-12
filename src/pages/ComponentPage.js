import React from "react";
import './ComponentPage.css';
import {Link} from "react-router-dom";
import CardLayout from "../components/CardLayout";

class ComponentPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-border">
                <Link to="/test">&lt; Testing Page</Link>
                <h1>Component Render:</h1>
                <div className="content-border">

                    <CardLayout text="sup"/>
                </div>
            </div>
        );
    }

}

export default ComponentPage;