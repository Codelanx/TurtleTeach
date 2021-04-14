import React from 'react'
import './Sandbox.css';
import SearchBar from "../../components/SearchBar";
import {Button, ButtonGroup} from "reactstrap";
import { Row, Col } from 'reactstrap';
import CodeBlock from "../../components/CodeBlock";
import ExecutionSpace from "../../components/ExecutionSpace";
import PlayButtons from "../../components/PlayButtons";

class Sandbox extends React.Component {
    render() {
        return (
            <div className="Sandbox">
                <h1>Sandbox</h1>
                <Row xs="3">
                    <Col>
                        <div className="PiecePicker">
                            <span>Piece Selection</span>
                            <SearchBar>Search</SearchBar>
                            <div><CodeBlock text={"Forward x"}/></div>
                            <div><CodeBlock text={"Backward x"}/></div>
                            <div><CodeBlock text={"Turn Right x"}/></div>
                            <div><CodeBlock text={"Turn Left x"}/></div>
                            <div><CodeBlock text={"If (Condition)"}/></div>
                            <div><CodeBlock text={"Else"}/></div>
                            <div><CodeBlock text={"Speed x"}/></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="DragAndDrop">
                            <span>Drag and Drop</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="TurtleWindow">
                            <span>Turtle Window</span>
                            <div className="Playback">
                                <PlayButtons/>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Sandbox;
