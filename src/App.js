import React from "react";
import Navigation from "./components/Navigation";
import TurtleRouter from "./Router";

function App() {
    return (
        <React.Fragment>
            <Navigation/>
            <div id="content" className="container col-md-9 offset-md-3 col-lg-10 offset-lg-2">
                <TurtleRouter />
            </div>
        </React.Fragment>
    );
}

export default App;