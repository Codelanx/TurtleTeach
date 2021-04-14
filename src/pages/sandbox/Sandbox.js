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
                <Row><Col xs={8}/><Col xs={4}><SearchBar placeholder={"Search Pieces"}/></Col></Row>
                <Row xs="3">
                    <Col xs={4}>
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
                    <Col xs={4}>
                        <CodingSpace text={"Drag and Drop"}/>
                    </Col>
                    <Col xs={4}>
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
