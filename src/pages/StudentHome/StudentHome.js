import React from 'react'
import './StudentHome.css';
import {
    Row, Col, Button
} from 'reactstrap';
import CardLayout from "../../components/CardLayout";


class StudentHome extends React.Component {

    constructor(props) {
        super(props);
    }


    example() {

    }


    render() {
        return (
            <Row className="StudentHome">
                <Col xs={10}>
                <CardLayout topText={"Current Classes"} class2={"Turtle Racing"} date1={"Jan-Jun 2021"} grade1={"A"} class1={"Turtle Ethics"} date2={"Jan-Jun 2021"} grade2={"F"}
                            bottomText={"Previous Classes"} class3={"Introduction"} date3={"Aug 2020"} grade3={"A"} class4={"Control Statements"} date4={"Aug-Dec 2020"} grade4={"B+"} class5={"Shell Dynamics"} date5={"Aug-Dec 2020"}
                            grade5={"B-"} class6={"Turtle Genetics"} date6={"Aug-Dec 2020"} grade6={"D"}/>
                </Col>
                <Col xs={1}>
                    <Row>
                    <img src="/img/turtle.png" alt="this was supposed to be the users profile image" width="100" height="100" />
                    </Row>
                    <Row>
                        <Button>Customize</Button>
                    </Row>
                    <Row>
                        <Button>Free Range </Button>
                    </Row>
                    <Row>
                        <Button>Other Puzzles </Button>
                    </Row>

                </Col>

            </Row>
        );
    }
}

export default StudentHome;