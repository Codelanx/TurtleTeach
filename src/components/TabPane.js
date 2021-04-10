import React from "react";
import './TabBar.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import TabBar from "./TabBar";

class TabPane extends React.Component {

    constructor(props) {
        super(props);
        this.currentPane = 0;
        this.panes = [];
        this.props.children.forEach(function(child) {
            this.panes.push(child);
        });
    }

    setTab(tab) {
        this.currentPane = tab;
    }

    render() {
        var usage = (
            <TabPane>
                <Pane title="Assignments">
                    <!-- TODO: Content per pane -->
                </Pane>
                <Pane title="Grades">
                    <!-- TODO: Content per pane -->
                </Pane>
            </TabPane>
        );


        return (
            <div>
                <TabBar>
                    <Tab to={this.setTab(0)}></Tab>
                    <Tab to={this.setTab(1)}></Tab>
                </TabBar>
                <div>

                </div>
                {this.props.text}
            </div>
        );
    }

}

export default TabPane;