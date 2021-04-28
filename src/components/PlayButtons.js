import React from "react";
import './SearchBar.css';
import {Row, Col} from "reactstrap";


class PlayButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
            <Row>
                <Col>
                    <i className={"bi bi-skip-backward-circle"} style={{width: "48px", height: "48px", fill: "currentColor"}} />
                </Col>
                <Col>
                    <i className={"bi bi-play-circle"} style={{width: "48px", height: "48px", fill: "currentColor"}} />
                </Col>
                <Col>
                    <i className={"bi bi-skip-forward-circle"} style={{width: "48px", height: "48px", fill: "currentColor"}} />
                </Col>
            </Row>
        );
    }

}

export default PlayButtons;