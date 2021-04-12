import React from "react";
import './Navigation.css';
import {
    Badge,
    Button,
    Collapse,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Input,
    InputGroup,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import {Link} from "react-router-dom";

class ClassDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        var prof = this.props.profile;
        if (!prof.isLoggedIn() || prof.getCurrentUser().isCreator()) {
            return null;
        }
        return (
            <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} >
                <DropdownToggle caret>My Classes</DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><Link to={"/class/101"}>Class 1</Link></DropdownItem>
                    <DropdownItem><Link to={"/class/102"}>Class 2</Link></DropdownItem>
                    <DropdownItem><Link to={"/class/103"}>Class 3</Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

class AccountDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        if (!this.props.profile.isLoggedIn()) {
            return (<Link to={"/login"}>Login / Register</Link>);
        }
        return (
            <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} >
                <DropdownToggle caret>{this.props.profile.getCurrentUser().getUsername()}</DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><Link to={"/account"}>Account Settings</Link></DropdownItem>
                    <DropdownItem><Link to={"/customize"}>Customize Turtle</Link></DropdownItem>
                    <DropdownItem><Link to={"/logout"}>Sign Out</Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

class LeftBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let link = this.props.profile.isLoggedIn()
            ? (<Link to="/test">Testing Page</Link>)
            : (<Link to="/sandbox">Try it Now!</Link>);
        return (
            <Nav justified={"left"}>
                <NavItem>
                    <NavLink>
                        {link}
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div className="turtle-nav">
                <Navbar expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className={"justify-content-md-between"}>
                        <LeftBar profile={this.props.profile} />
                        <Link to={"/"}><img className={"logo"} src={"/img/turtle.png"}  alt={"Click logo to return to home screen"}/></Link>
                        <Nav>
                            <NavItem>
                                <ClassDropdown profile={this.props.profile} />
                            </NavItem>
                            <NavItem>
                                <AccountDropdown profile={this.props.profile} />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Navigation;