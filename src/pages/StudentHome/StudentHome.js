import React from 'react'
import './StudentHome.css';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";


class StudentHome extends React.Component {

    constructor(props) {
        super(props);
    }


    example() {

    }


    render() {
        return (
            <div className="StudentHome">
                <h1>Student Homepage: </h1>
                <div>
                    <img src="/img/turtle.png" alt="this was supposed to be the users profile image" width="100" height="100" />
                </div>

                <div>
                    <div>Current Classes</div>
                    <div>
                        
                    </div>
                    <div>Previous Classes</div>
                    <div>
                        
                    </div>
                    
                </div>

                <div>
                <Button>Customize</Button>
                <Button>Free Range </Button>
                <Button>Other Puzzles </Button>
                </div>
            </div>
        );
    }
}

export default StudentHome;