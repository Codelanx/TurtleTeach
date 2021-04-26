import React from 'react'
import './Customize.css';
import User from "../../data/User";
import SearchBar from "../../components/SearchBar";
import {Button, ButtonGroup, Col, Row} from "reactstrap";
import Swagponent from "../../components/Swagponent";


function PreviewWindow(props) {

    return (
        <Col xs={12} lg={10} className={"order-2 order-md-1"}>
            <h1>Turtle Customization</h1>
            <Button>Save</Button>
        </Col>
    );
}

function ProgressArea(props) {

}

function SwagSelector(props) {
    return (
        <Col xs={12} lg={2} className={"order-1 order-md-2"}>
            <SearchBar />

        </Col>
    );

}

class Customize extends React.Component {
    render() {
        return (
            <Row className="Customize">
                <SwagSelector />
                <PreviewWindow />
            </Row>
        );
    }
}

export default Customize;
