import React from 'react'
import './DevEnvironment.css';
import CodeBlockSpace from "../../components/CodeBlockSpace";
import DebugSpace from "../../components/DebugSpace";
import ExecutionSpace from "../../components/ExecutionSpace";
import GradeSpace from "../../components/GradeSpace";
import SearchBar from "../../components/SearchBar";
import Instuructions from "../../components/Instuructions";
import { Link } from "react-router-dom";
import {Button, Row, Col} from "reactstrap";
import CodingSpace from "../../components/CodingSpace";

class StudentEnv extends React.Component {
    render() {
        return (
            <Col>
                <Row xs="3">
                    <Col xs={4}>
                        <Button>Help</Button>
                    </Col>
                    <Col xs={4}>
                        <Button tag={Link} to="/ClassHome">Submit</Button>
                    </Col>
                    <Col xs={4}>
                        <SearchBar placeholder={"Search Pieces"}/>
                    </Col>

                </Row>
                <Row>
                    <Col xs={4}>
                        <Row><CodeBlockSpace/></Row>
                        <Row><Instuructions/></Row>
                    </Col>
                    <Col xs={4}>
                        <CodingSpace text={"Coding Area - Student Drags Pieces Here"}/>
                    </Col>
                    <Col xs={4}>
                        <Row><ExecutionSpace/></Row>
                        <Row><DebugSpace/></Row>
                    </Col>
                </Row>
            </Col>

        );
    }
}

class TeacherEnv extends React.Component {
    render() {
        return (
            <Col>
                <Row>
                    <Col xs={4}>
                        <Row><GradeSpace/></Row>
                        <Row><Instuructions/></Row>
                    </Col>
                    <Col xs={4}>
                        <CodingSpace text={"Coding Area - Student Code Shown Here"}/>
                    </Col>
                    <Col xs={4}>
                        <Row><ExecutionSpace/></Row>
                        <Row><DebugSpace/></Row>
                    </Col>

                </Row>
                <a href="/ClassHome">Home</a>
            </Col>
        );
    }
}


class DevEnvironment extends React.Component{

    constructor(props){
        super(props);
    }




    render() {

        function whichHome(profile){

            if(profile.getCurrentUser().isTeacher()) {
                return (
                    <TeacherEnv/>
                );
            }
            return (<StudentEnv />);
        }

        return (whichHome(this.props.profile));

    }
}

export default DevEnvironment;
