import React from 'react'
import './TeacherHome.css';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";


class TeacherHome extends React.Component {

    constructor(props) {
        super(props);
    }


    example() {

    }


    render() {
        return (
            <div className="TeacherHome">
                <h1>Teacher Homepage: </h1>
                <div>
                    <img src="/img/turtle.png" alt="this was supposed to be the users profile image" width="100" height="100" />
                </div>

                <div>
                    <div>Current Classes</div>
                    
                    <div>Previous Classes</div>

                </div>

                <div>
                    <Button>Add New Class</Button>
                </div>
            </div>
        );
    }
}

export default TeacherHome;