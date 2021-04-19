import React from "react";
import './SearchBar.css';
import {Row, Col, InputGroup, Button, InputGroupAddon, Input, InputGroupText} from "reactstrap";
import TurtleButton from "./TurtleButton";


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Col xs={12} className={"searchbar"}>
                <InputGroup className={"col-12"}>
                    <Input placeholder={this.props.placeholder} />
                    <InputGroupAddon addonType={"append"}>
                        <TurtleButton style={{"border-radius": "0px"}}>
                            <i className={"bi bi-search"}>
                                &nbsp;&nbsp;Search
                            </i>
                        </TurtleButton>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        );
    }

}

export default SearchBar;