import React from 'react'
import './Login.css';
import {Button, ButtonGroup, FormGroup, Input, Label, Row} from "reactstrap";
import {Redirect, useHistory} from "react-router";
import {Link} from "react-router-dom";

function LoginButton(props) {
    //let history = useHistory();
    let redir = null;

    function handleClick() {
        if (props.parent.profile.setCurrentUser(props.parent.state.email) !== null) {
            //history.push('/');
            redir = (<Redirect to={'/'} />);
        }
    }

    return (
        <Button color={"primary"} onClick={handleClick} block tag={Link} to={"/login"}>Log In{redir}</Button>
    );
}

function RegisterButton(props) {
    //let history = useHistory();
    let redir = null;

    function handleClick() {
        props.parent.profile.setCurrentUser(props.parent.state.email);
        if ((props.parent.profile.setCurrentUser(props.parent.state.email) !== null)){
            //history.push('/');
            redir = (<Redirect to={'/'} />);

        }
    }

    return (
        <Button color={"primary"} onClick={handleClick} block>Register{redir}</Button>
    );
}

class Login extends React.Component {


    constructor(props) {
        super(props);
        this.profile = props.profile;
        this.state = {email: ''}
        this.state = {name: ''}
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }
    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }
    updateName = (n) => {
        this.setState({name: n.target.value});
    }

    updateEmail = (e) => {
        this.setState({email: e.target.value});
    }

    render() {
        if (this.profile.isLoggedIn()){
            return <Redirect to='/'/>
        }
        else {
            return (
                <React.Fragment>
                    <div className={"col-6 container-fluid"}>
                        <Row className={"loginArea justify-content-center"}>
                            <Button className={"btnGoogle"} block><img src={"#"}/>Log in with Google</Button>
                            <Button className={"btnFacebook"} block><img src={"#"}/>Log in with FaceBook</Button>

                            <div className="Login">
                                <FormGroup>
                                    <Label for={"email"}>Email</Label>
                                    <Input type={"email"} name={"email"} id={"email"}
                                           placeholder={"raphael@turtle.teach"} value={this.state.email}
                                           onChange={this.updateEmail}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for={"password"}>Password</Label>
                                    <span className={"justify-content-right forgot-password"}><Link
                                        to={"/login/forgot"}>Forgot Password?</Link></span>
                                    <Input type={"password"} name={"password"} id={"password"}/>
                                </FormGroup>
                                <FormGroup>
                                    <LoginButton parent={this}/>
                                </FormGroup>
                            </div>

                            <span>New user? Register Below</span>

                            <div className="Register">
                                <FormGroup>
                                    <Label for={"Name"}>Name</Label>
                                    <Input type={"Name"} name={"Name"} id={"Name"} placeholder={"John Doe"}
                                           onChange={this.updateName}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for={"email2"}>Email</Label>
                                    <Input type={"email"} name={"email2"} id={"email2"}
                                           placeholder={"raphael@turtle.teach"}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for={"password"}>Password</Label>
                                    <Input type={"password"} name={"password2"} id={"password2"}/>
                                </FormGroup>
                                <FormGroup>
                                    <RegisterButton parent={this}/>
                                </FormGroup>


                            </div>
                        </Row>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Login;
