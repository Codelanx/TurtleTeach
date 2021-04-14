import React, {useState} from "react";
import './StudentTab.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Table, UncontrolledCollapse, Button, Card, CardBody, Col } from 'reactstrap';
import StudentGrades from "./StudentGrades";
import StudentAssignment from "./StudentAssignment";
import StudentLabel from "./StudentLabel";
import Tutorial from "./Tutorial";


const stu = 8;
const num = 4;

function Rank(props) {
    return (
        <Col xs={num} className={"rank-font"}>#{props.value}</Col>
    );
}

function Listing(props) {
    let student = props.you === undefined
        ? (<StudentLabel />)
        : (<StudentLabel you={props.prefix} />);
    return (
        <Row className={"listing"} style={props.style}><Rank value={props.place}/><Col xs={stu}>{student}</Col></Row>
    );
}


class Leaderboard extends React.Component {
    render() {

        let studentRank = 9;
        let you = (<Listing place={studentRank} you={"You:"} />);

        let trailing = [];
        for (let i = 6; i < 17; i++) {
            if (i === studentRank) {
                trailing.push(you);
                continue;
            }
            let next = (<Listing place={i} />);
            trailing.push(next);
        }


        return (
            <div class={"leaderboard-container"}>
                <Listing place={1} style={{backgroundColor: '#ffd700'}}/>
                <Listing place={2} style={{backgroundColor: '#C0C0C0'}}/>
                <Listing place={3} style={{backgroundColor: '#CD7f32'}}/>
                <Listing place={4} />
                <Listing place={5} />
                <UncontrolledCollapse id="leaderboard-toggle" toggler="#leaderboard-toggle" defaultOpen={true} className={"row"}>
                    <a href="#" className="fill-div">...</a>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#leaderboard-toggle" defaultOpen={true}>
                    {you}
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#leaderboard-toggle">
                    {trailing}
                </UncontrolledCollapse>
            </div>
        );
    }
}

const StudentTab = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }



    return (



        <div>
            <Nav tabs className="nav-fill">
                <NavItem>
                    <NavLink
                        onClick={() => { toggle('1'); }}
                    >
                        My Assignments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        onClick={() => { toggle('2'); }}
                    >
                        Class Leaderboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        onClick={() => { toggle('3'); }}
                    >
                        My Grades
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        onClick={() => { toggle('4'); }}
                    >
                        Tutorials
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <StudentAssignment/>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Leaderboard/>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <StudentGrades/>
                </TabPane>
                <TabPane tabId="4">
                    <Row><Tutorial/>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default StudentTab;