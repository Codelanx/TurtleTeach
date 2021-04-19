import React from "react";
import './SearchBar.css';
import {Row, Col, InputGroup, Button, InputGroupAddon, Input, InputGroupText} from "reactstrap";


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
                        <Button>
                            <i className={"bi bi-search"}>
                                &nbsp;&nbsp;Search
                            </i>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        );
    }

}

export default SearchBar;