import React from 'react'
import './Sandbox.css';
import SearchBar from "../../components/SearchBar";
import {Button, ButtonGroup} from "reactstrap";
import { Row, Col } from 'reactstrap';
import CodeBlock from "../../components/CodeBlock";
import ExecutionSpace from "../../components/ExecutionSpace";
import PlayButtons from "../../components/PlayButtons";
import DebugSpace from "../../components/DebugSpace";
import CodingSpace from "../../components/CodingSpace";

class Sandbox extends React.Component {
    render() {
        return (
            <div className="Sandbox">
                <h1>Sandbox</h1>
                <Row><SearchBar placeholder={"Search Pieces"} className={"searchbar"}/></Row>
                <Row xs="3">
                    <Col className={"padding"}>
                        <div className="PiecePicker">
                            <span>Piece Selection</span>
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
                        <CodingSpace text={"Drag and Drop"} className={"codingSpace"}/>
                    </Col>
                    <Col>
                        <Row>
                            <ExecutionSpace/>
                        </Row>
                        <Row>
                            <DebugSpace/>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Sandbox;
