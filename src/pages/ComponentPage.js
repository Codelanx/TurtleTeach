import React from "react";
import Navigation from "../components/Navigation";
import './ComponentPage.css';
import {Link} from "react-router-dom";
import StudentLabel from "../components/StudentLabel";
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
                    <StudentLabel />
                    <ContentCard />
                    <Logo />
                </div>
            </div>
        );
    }

}

export default ComponentPage;