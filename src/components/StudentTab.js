import React, {useState} from "react";
import './StudentTab.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Table } from 'reactstrap';
import StudentGrades from "./StudentGrades";
import StudentAssignment from "./StudentAssignment";
import StudentLabel from "./StudentLabel";


class Leaderboard extends React.Component {

    render() {
        return (
            <Table bordered>
                <thead>
                <tr><th scope="row" colSpan={2} className="rank-font">Class Leaderboard</th></tr>
                </thead>
                <tr bgcolor="#ffd700">
                    <th scope="row" className="rank-font">#1</th>
                    <th><StudentLabel/></th>
                </tr>
                <tr bgcolor="#C0C0C0">
                    <th scope="row" className="rank-font">#2</th>
                    <th><StudentLabel/></th>
                </tr>
                <tr bgcolor="#CD7f32">
                    <th scope="row" className="rank-font">#3</th>
                    <th><StudentLabel/></th>
                </tr>
                <tr>
                    <th scope="row" className="rank-font">#4</th>
                    <th><StudentLabel/></th>
                </tr>
                <tr>
                    <th scope="row" className="rank-font">#5</th>
                    <th><StudentLabel/></th>
                </tr>
                <tbody>

                </tbody>
            </Table>
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
                    <Row>Here Shall Be Tutorials Page
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default StudentTab;