import React, {useState} from "react";
import './TeacherTab.css';
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
                        className={{active: activeTab==='1'}}
                    >
                        My Students
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        onClick={() => { toggle('2'); }}
                        className={{active: activeTab==='2'}}
                    >
                       Assignments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        onClick={() => { toggle('3'); }}
                        className={{active: activeTab==='3'}}
                    >
                        Grading
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        onClick={() => { toggle('4'); }}
                        className={{active: activeTab==='4'}}
                    >
                        Tutorials
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent style={{"margin-top": "1rem"}} activeTab={activeTab}>
                <TabPane tabId="1" >
                    <TeacherStudentView />
                </TabPane>
                <TabPane tabId="2">
                    <TeacherAssignment />
                </TabPane>
                <TabPane tabId="3">
                    <TeacherGrades />
                </TabPane>
                <TabPane tabId="4">
                    <Tutorial />
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TeacherTab;