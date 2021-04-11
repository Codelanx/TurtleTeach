import React from "react";
import Navigation from "./components/Navigation";
import TurtleRouter from "./Router";
import Profile from "./User";

function App() {
    let prof = new Profile();

    return (
        <React.Fragment>
            <Navigation profile={prof} />
            <div id="content" className="container col-md-9 col-lg-10">
                <TurtleRouter profile={prof} />
            </div>
        </React.Fragment>
    );
}

export default App;