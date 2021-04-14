import React, {useState} from "react";
import './StudentTab.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Table, UncontrolledCollapse, Button, Card, CardBody, Col } from 'reactstrap';
import StudentGrades from "./StudentGrades";
import StudentAssignment from "./StudentAssignment";
import StudentLabel from "./StudentLabel";
import Tutorial from "./Tutorial";



class Leaderboard extends React.Component {




    render() {
        var text = "rank-font";

        function hideText(){
            text = "hidden";
        }

        return (

            <div>
                <Card>
                    <CardBody className={"rank-font"}>
                        <Row style={{backgroundColor: '#ffd700'}}><Col xs={2.5}>#1</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                        <Row style={{backgroundColor: '#C0C0C0'}}><Col xs={2.5}>#2</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                        <Row style={{backgroundColor: '#CD7f32'}}><Col xs={2.5}>#3</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                        <Row><Col xs={2.5}>#4</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                        <Row><Col xs={2.5}>#5</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                    </CardBody>
                </Card>


                <UncontrolledCollapse toggler="#leaderboard" defaultOpen="True">
                    <div id="leaderboard" >
                        <a href="#" className="fill-div" onClick={'hideText()'}>...</a>
                    </div>
                    <Row className="rank-font"><Col xs="2">#9</Col><Col xs="8"><StudentLabel you={"You:"}/></Col></Row>
                </UncontrolledCollapse>



                <UncontrolledCollapse toggler="#leaderboard">
                    <Card>
                        <CardBody className={"rank-font"}>
                            <Row><Col xs={2.5}>#6</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#7</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#8</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#9</Col><Col xs={7.5}><StudentLabel you={"You:"}/></Col></Row>
                            <Row><Col xs={2.5}>#10</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#11</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#12</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#13</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#14</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#15</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#16</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                            <Row><Col xs={2.5}>#17</Col><Col xs={7.5}><StudentLabel/></Col></Row>
                        </CardBody>
                    </Card>
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