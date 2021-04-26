import React, {useState} from "react";
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
import {UserType} from "../data/User";

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
                        <span>
                            {props.children}
                        </span>
                    </i>
                </div>
            );
            break;
        case UserType.TEACHER:
            return (
                <div className={"avatar-notif-badge"}>
                    <span>
                        {props.children}
                    </span>
                </div>
            );
            break;
        default:
            return null;
    }
}


function AccountDropdownMenu(props) {
    if (!props.profile.isLoggedIn()) {
        return null;
    }
    let user = props.profile.getCurrentUser();
    switch (user.getUserType()) {
        case UserType.STUDENT:
            return (
                <DropdownMenu right>
                    <Link to={"/account"}><DropdownItem>Account Settings</DropdownItem></Link>
                    <Link to={"/customize"}><DropdownItem>Customize Turtle</DropdownItem></Link>
                    <Link to={"/logout"}><DropdownItem>Sign Out</DropdownItem></Link>
                </DropdownMenu>
            );
            break;
        case UserType.TEACHER:
            return (
                <DropdownMenu right>
                    <Link to={"/account"}><DropdownItem>Account Settings</DropdownItem></Link>
                    <Link to={"/logout"}><DropdownItem>Sign Out</DropdownItem></Link>
                </DropdownMenu>
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
        let badge = null;
        if (this.props.profile.getCurrentUser().isStudent()) {
            badge = (
                <AvatarBadge profile={this.props.profile}>
                    42
                </AvatarBadge>
            );
        }
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
        let prof = this.props.profile;
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

function AlertDropdown(props) {
    let [isOpen, setIsOpen] = useState(!!props.isOpen);
    let toggle = () => setIsOpen(!isOpen);
    let content = !!props.children
        ? props.children
        : (
            <React.Fragment>
                <Link to={"#"}><DropdownItem>Notification 1</DropdownItem></Link>
                <Link to={"#"}><DropdownItem>Notification 2</DropdownItem></Link>
                <Link to={"#"}><DropdownItem>Notification 3</DropdownItem></Link>
            </React.Fragment>
        );
    let count = null;
    if (props.profile.getCurrentUser().isTeacher()) {
        count = (
            <AvatarBadge profile={props.profile}>
            42
            </AvatarBadge>
        );
    }
    return (
        <Dropdown className="nav-dropdown" isOpen={isOpen} toggle={toggle} >
            <DropdownToggle caret>
                <span><i className={"bi bi-bell-fill nav-icon"}/></span>
                {count}
            </DropdownToggle>
            <DropdownMenu right>
                {content}
            </DropdownMenu>
        </Dropdown>
    );
}

function HomeButton(props) {
    return (
        <div className="nav-dropdown">
            <Button tag={Link} to={"/"}><i className={"bi bi-house-fill nav-icon"} /></Button>
        </div>
    );
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
        return (
            <Dropdown className="nav-dropdown" isOpen={this.state.isOpen} toggle={this.toggle} >
                <DropdownToggle caret>
                    <ProfilePicture profile={this.props.profile} />
                    <span>{this.props.profile.getCurrentUser().getUsername()}</span>
                </DropdownToggle>
                <AccountDropdownMenu profile={this.props.profile}/>
            </Dropdown>
        );
    }
}

class LeftBar extends React.Component {

    static IS_TESTING = false;

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

function RightBar(props) {
    if (!props.profile.isLoggedIn()) {
        return (
            <Nav className={"no-pad"}>
                <NavItem>
                    <Link to={"/login"}><span>Login / Register</span></Link>
                </NavItem>
            </Nav>
        );
    }
    return (
        <Nav className={"no-pad"}>
            <NavItem>
                <HomeButton />
            </NavItem>
            <NavItem>
                <AlertDropdown profile={props.profile} />
            </NavItem>
            <NavItem>
                <ClassDropdown profile={props.profile} />
            </NavItem>
            <NavItem>
                <AccountDropdown profile={props.profile} />
            </NavItem>
        </Nav>
    );
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
            rightNav = (<RightBar profile={this.props.profile} />);
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