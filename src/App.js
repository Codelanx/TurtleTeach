import React from "react";
import Navigation from "./components/Navigation";
import TurtleRouter from "./Router";
import Profile from "./User";
import {Col, Row} from "reactstrap";

function ExamplePage() {
    return (
        <Col className={"h-100"} md={"12"} style={{"background-color": "red", "display": "inline-block"}}>
            <Col md={"6"} className={"ourCard"} style={{"background-color": "white", "border": "1px solid #000"}}>
                <Row>
                    <Col md={"12"} style={{"height": "250px", "background-color": "gray"}}>
                        Image
                    </Col>
                </Row>
                <Row>
                    <Col md={"8"} style={{"background-color": "blue"}}>
                        <Row style={{"background-color": "lightblue"}}>
                            Title
                        </Row>
                        <Row style={{"background-color": "cyan"}}>
                            Date
                        </Row>
                    </Col>
                    <Col md={"4"} style={{"background-color": "green", "text-align": "center"}}>
                        B
                    </Col>
                </Row>
            </Col>
        </Col>
    );
}

function App() {
    let prof = new Profile();
    return (
        <React.Fragment>
            <Navigation profile={prof} />
            <Col id={"content"} className={"container"} md={"12"} lg={"10"}>
                <TurtleRouter profile={prof} />
            </Col>
        </React.Fragment>
    );
}

export default App;