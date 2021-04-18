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
import {UserType} from "../User";

function AvatarBadge(props) {
    if (!props.profile.isLoggedIn()) {
        return null;
    }
    let user = props.profile.getCurrentUser();
    switch (user.getUserType()) {
        case UserType.STUDENT:
            return (
                <div className={"avatar-level-badge"}>
                    <i className={"bi bi-star-fill level"}>
                        {props.children}
                    </i>
                </div>
            );
            break;
        case UserType.TEACHER:
            return (
                <div className={"avatar-notif-badge"}>
                    {props.children}
                </div>
            );
            break;
        default:
            return null;
    }
}

class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.profile.isLoggedIn()) {
            return null;
        }
        let avatar = "/img/turtle.png";
        return (
            <div className={"navbar-avatar"}>
                <img src={avatar} />
                <AvatarBadge profile={this.props.profile}>
                    42
                </AvatarBadge>
            </div>
        );
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
                    <Link to={"/class/101"}><DropdownItem>Class 1</DropdownItem></Link>
                    <Link to={"/class/102"}><DropdownItem>Class 2</DropdownItem></Link>
                    <Link to={"/class/103"}><DropdownItem>Class 3</DropdownItem></Link>
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
                <DropdownToggle caret>
                    <ProfilePicture profile={this.props.profile} />
                    <span>{this.props.profile.getCurrentUser().getUsername()}</span>
                </DropdownToggle>
                <DropdownMenu right>
                    <Link to={"/account"}><DropdownItem>Account Settings</DropdownItem></Link>
                    <Link to={"/customize"}><DropdownItem>Customize Turtle</DropdownItem></Link>
                    <Link to={"/logout"}><DropdownItem>Sign Out</DropdownItem></Link>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

class LeftBar extends React.Component {

    static IS_TESTING = true;

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
        this.isAuth = !!props.isAuth;
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        let rightNav = null;
        if (!this.isAuth) {
            rightNav = (
                <Nav className={"no-pad"}>
                    <NavItem>
                        <ClassDropdown profile={this.props.profile} />
                    </NavItem>
                    <NavItem>
                        <AccountDropdown profile={this.props.profile} />
                    </NavItem>
                </Nav>
            );
        }
        return (
            <div className="turtle-nav">
                <Navbar expand="md" className={"turtle-navbar"}>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className={"justify-content-md-between"}>
                        <LeftBar profile={this.props.profile} />
                        <Link className={"no-pad no-margin logo-link"} to={"/"}><img className={"logo"} src={"/img/logo_inverted.png"} alt={"Click logo to return to home screen"} /></Link>
                        {rightNav}
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Navigation;