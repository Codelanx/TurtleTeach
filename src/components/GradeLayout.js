import React from "react";
import './GradeLayout.css';
import {Badge, Button, Input, InputGroup, Nav, NavItem, NavLink} from "reactstrap";

class GradeLayout extends React.Component {

    constructor(props) {
        super(props);
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
            <div>

                <Nav pills>

                </Nav>
            </div>
        );
    }

}

export default GradeLayout;