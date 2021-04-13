import React from 'react'
import './Sandbox.css';
import SearchBar from "../../components/SearchBar";
import {Button, ButtonGroup} from "reactstrap";
import { Row, Col } from 'reactstrap';

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
                            <div>
                                <ButtonGroup>
                                    <Button>Run</Button>
                                    <Button>Pause</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Sandbox;
