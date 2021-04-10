import React from "react";
import './Navigation.css';
import {Badge, Button, Collapse, Input, InputGroup, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.isOpen = false;
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    render() {
        //TODO: Remove below example code after navbar up and running
        /*return (
            <React.Fragment>
                <Button id="nav-fold" type="button"
                        className="btn btn-secondary btn-lg btn-block col-xs-12 d-block d-md-none" data-toggle="collapse"
                        data-target="#sidenav" aria-expanded="true" aria-controls="collapseExample">
                    <span className="fa fa-bars"></span>
                </Button>
                <div className="col-md-3 col-lg-2 col-xs-12 sidebar collapse" id="sidenav">
                    <Nav vertical={true} className="nav-sidebar flex-column">
                        <NavItem><NavLink href="./queue">Queue <Badge color="secondary">{this.queueSize}</Badge></NavLink></NavItem>
                        <NavItem><NavLink href="./browser">Browser</NavLink></NavItem>
                        <NavItem><NavLink href="./admin">Admin</NavLink></NavItem>
                        <NavIteTm><NavLink href="./torrents">Torrents</NavLink></NavItem>
                        <NavItem><NavLink href="./logout">Logout</NavLink></NavItem>
                    </Nav>
                    <div className="control-row">
                        <InputGroup className="searcher col-xs-12" data-search-type="general">
                            <Input type='text' placeholder='Search media...' />
                            <div className="form-popup d-none"></div>
                        </InputGroup>
                    </div>
                </div>
            </React.Fragment>
        );*/
        return (
            <div className="turtle-nav">
                <Navbar expand="md">
                    <NavbarToggler onClick={this.toggle()} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav>
                            <NavItem>
                                <NavLink>
                                    <Link to="/test">
                                        Testing Page
                                    </Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Navigation;