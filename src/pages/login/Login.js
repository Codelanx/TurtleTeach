import React from 'react'
import './Login.css';
import {Button, FormGroup, Input, Label, Row} from "reactstrap";
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
        <Button color={"primary"} onClick={handleClick} block>Log In{redir}</Button>
    );
}

class Login extends React.Component {


    constructor(props) {
        super(props);
        this.profile = props.profile;
        this.state = {email: ''}
    }

    updateEmail = (e) => {
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <div className={"col-6 container-fluid"}>
                    <Row className={"loginArea justify-content-center"}>
                        <Button className={"btnGoogle"} block><img src={"#"} />Log in with Google</Button>
                        <Button className={"btnFacebook"} block><img src={"#"} />Log in with FaceBook</Button>

                        <div className="Login">
                            <FormGroup>
                                <Label for={"email"}>Email</Label>
                                <Input type={"email"} name={"email"} id={"email"} placeholder={"raphael@turtle.teach"} value={this.state.email} onChange={this.updateEmail}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for={"password"}>Password</Label>
                                <span className={"justify-content-right forgot-password"}><Link to={"/login/forgot"}>Forgot Password?</Link></span>
                                <Input type={"password"} name={"password"} id={"password"} />
                            </FormGroup>
                            <FormGroup>
                                <LoginButton parent={this} />
                            </FormGroup>
                        </div>
                        <span>New user? <Link to={"/login/register"}>Register Now</Link></span>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
