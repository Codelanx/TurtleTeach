import React from "react";
import './ComponentPage.css';
import {Link} from "react-router-dom";
import CardLayout from "../components/CardLayout";
import Swagponent from "../components/Swagponent";
import ContentCard from "../components/ContentCard";
import Logo from "../components/Logo";

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

                    <Swagponent pathname="/img/sunglasses.png" />
                    <Swagponent pathname="/img/flag.png" />
                    <ContentCard />
                    <Logo />

                </div>
            </div>
        );
    }

}

export default ComponentPage;