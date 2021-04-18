import React from "react";
import './Navigation.css';
import {
    Badge,
    Button,
    CardImg,
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

function LevelBadge(props) {
    return (
        <div className={"level-badge"}>
            {props.children}
        </div>
    );
}



class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var prof = this.props.profile;
        if (!prof.isLoggedIn() || prof.getCurrentUser().isCreator()) {
            return null;
        }
        else if (prof.getCurrentUser().isTeacher()){
            return (<CardImg src="/img/turtle.png" alt="this was supposed to be a turtle" className={"profile-image"}/>)
        }
        else{
            return (<div><CardImg src="/img/turtle.png" alt="this was supposed to be a turtle" className={"profile-image"}/><p className={"level-badge"}>7</p></div>)
        }
    }
}


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
            <Dropdown className="nav-dropdown" isOpen={this.state.isOpen} toggle={this.toggle} >
                <DropdownToggle caret><span>My Classes</span></DropdownToggle>
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
            return (<Link to={"/login"}><span>Login / Register</span></Link>);
        }
        return (
            <Dropdown className="nav-dropdown" isOpen={this.state.isOpen} toggle={this.toggle} >
                <DropdownToggle caret><span>{this.props.profile.getCurrentUser().getUsername()}</span></DropdownToggle>
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

    static IS_TESTING = false

    constructor(props) {
        super(props);
    }

    render() {
        let link = null;
        if (this.props.profile.isLoggedIn()) {
            if (LeftBar.IS_TESTING) {
                link = (<Link to="/test">Testing Page</Link>);
            }
        } else {
            link = (<Link to="/sandbox">Try it Now!</Link>);
        }
        if (link === null) {
            return null;
        }
        return (
            <Nav className={"nopad"} justified={"left"}>
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
        this.props.profile.registerComponentUpdates(this);
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
                <Navbar expand="md" className={"no-pad"}>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className={"no-pad justify-content-md-between turtle-navbar"}>
                        <LeftBar profile={this.props.profile} />
                        <Link className={"no-pad no-margin logo-link"} to={"/"}><img className={"logo"} src={"/img/logo_inverted.png"} alt={"Click logo to return to home screen"} /></Link>
                        <Nav className={"no-pad"}>
                            <NavItem>
                                <ClassDropdown profile={this.props.profile} />
                            </NavItem>
                            <NavItem>
                                <ProfilePicture profile={this.props.profile}/>
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