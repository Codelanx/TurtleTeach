import React from "react";
import Navigation from "../components/Navigation";

class ComponentPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{"border": "2px solid #ccc;"}}>
                <Navigation />
            </div>
        );
    }

}

export default ComponentPage;