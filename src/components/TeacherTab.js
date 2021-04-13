import React, {useState} from "react";
import './StudentTab.css';
import TeacherAssignment from "./TeacherAssignment";
import TeacherGrades from "./TeacherGrades";
import TeacherStudentView from "./TeacherStudentView";
import Tutorial from "./Tutorial";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';

const TeacherTab = (props) => {
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
                        My Students
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        onClick={() => { toggle('2'); }}
                    >
                       Assignments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        onClick={() => { toggle('3'); }}
                    >
                        Grading
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
                        <TeacherStudentView/>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <TeacherAssignment/>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <TeacherGrades/>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row><Tutorial/>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TeacherTab;