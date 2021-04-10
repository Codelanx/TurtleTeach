import React from "react";
import Navigation from "../components/Navigation";
import './ComponentPage.css';

class ComponentPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="content-border">
                <h1>Component Render:</h1>
                <div className="content-border">
                    <Navigation />
                </div>
            </div>
        );
    }

}

export default ComponentPage;