import React, {useState} from 'react'
import './Login.css';
import {Button, ButtonGroup, FormGroup, Input, Label, Row} from "reactstrap";
import {Redirect, useHistory} from "react-router";
import {Link} from "react-router-dom";

function LoginButton(props) {
    let history = useHistory();
    //let redir = null;
    return (
        <Button color={"primary"} onClick={props.login} block>Log In</Button>
    );
}

function RegisterButton(props) {
    return (
        <Button color={"primary"} block disabled>Register</Button>
    );
}

function RegisterForm(props) {
    return (
        <div className="Register">
            <FormGroup>
                <Label for={"Name"}>Name</Label>
                <Input type={"Name"} name={"Name"} id={"Name"} placeholder={"John Doe"}/>
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
    );
}

function Register(props) {
    return (
        <div>
            <div className={"col-6 container-fluid"}>
                <h1>Register:</h1>
                <Row className={"loginArea justify-content-center"}>
                    <RegisterForm />
                </Row>
            </div>
        </div>
    );
}

function Login(props) {

    let history = useHistory();
    let [email, setEmail] = useState('');
    let [valid, setValid] = useState(!!!props.invalid);

    const login = (e) => {
        if (e !== null && e.keyCode !== 13) {
            return; //no-op
        }

        let user = props.profile.setCurrentUser(email);
        if (user === null) {
            setValid(false);
        } else {
            history.push('/');
        }
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    let validity = valid ? "" : " is-invalid";

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
                                   placeholder={"raphael@turtle.teach"} value={email}
                                   className={validity}
                                   onChange={updateEmail}
                                   onKeyUp={login}
                            />
                            <div className={"invalid-feedback"}>
                                <span>Incorrect Username or Password</span>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"password"}>Password</Label>
                            <span className={"justify-content-right forgot-password"}><Link
                                to={"/login/forgot"}>Forgot Password?</Link></span>
                            <Input className={validity} type={"password"} name={"password"} id={"password"}/>
                        </FormGroup>
                        <FormGroup>
                            <LoginButton parent={this} login={login}/>
                        </FormGroup>
                    </div>

                    <span>New user? <Link to={"/login/register"}>Register Now!</Link></span>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Login;
export {
    Register
};