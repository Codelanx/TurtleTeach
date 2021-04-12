import React from "react";
import './StundentLabel.css';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import ContentCard from "./ContentCard";

class StudentLabel extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div id="mainContainer">
                    <div>
                        <img src="/img/turtle.png" alt="this was supposed to be a turtle" width="113" height="71" />
                    </div>

                    <div id="subContainer" class="item">
                        <div>
                            <a href="#top" id="link">Student Name</a>
                        </div>
                        <div>
                            <i>student@email.com</i>
                        </div>
                    </div>

                    <div id="subContainer">
                        <div>
                            Last Online:
                        </div>
                        <div>
                            Jan-20-21
                        </div>
                    </div>
                </div>

                {this.props.text}
            </div>
        );
    }
}

export default StudentLabel;