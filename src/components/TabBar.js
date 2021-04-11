import React, {useState} from "react";
import './TabBar.css';
import {Link} from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const TabBar = (props) => {
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
                        Tutorial
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        Assignments Page Goes Here
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>Class Leaderboard Goes Here
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        Grades Page Goes Here
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>Here Shall Be Tutorials Page
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TabBar;