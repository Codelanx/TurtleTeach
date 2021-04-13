import React from 'react'
import './TeacherHome.css';
import {
    Row, Button
} from 'reactstrap';
import CardLayout from "../../components/CardLayout";


class TeacherHome extends React.Component {

    render() {
        return (
            <Row className="TeacherHome">
                <Row>
                    <Button>Add New Class</Button>
                </Row>
                <Row>
                    <CardLayout topText={"Current Teaching"} class1={"Turtle Racing"} date1={"Jan-Jun 2021"} notifications1={"10"} class2={"Turtle Ethics"} date2={"Jan-Jun 2021"} notifications2={"69"}
                                bottomText={"Previous Taught"} class3={"Introduction"} date3={"Aug 2020"} class4={"Control Statements"} date4={"Aug-Dec 2020"} class5={"Shell Dynamics"} date5={"Aug-Dec 2020"}
                                 class6={"Turtle Ethics"} date6={"Aug-Dec 2020"}/>
                </Row>


            </Row>
        );
    }
}

export default TeacherHome;