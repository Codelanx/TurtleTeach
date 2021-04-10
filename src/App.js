import React from "react";
import Navigation from "./components/Navigation";
import TurtleRouter from "./Router";

function App() {
    return (
        <React.Fragment>
            <Navigation/>
            <div id="content" className="container col-md-9 col-lg-10">
                <TurtleRouter />
            </div>
        </React.Fragment>
    );
}

export default App;