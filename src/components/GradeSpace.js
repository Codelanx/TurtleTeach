import React from "react";
import './GradeSpace.css';
import {Row, Col, Button} from "reactstrap";
import {Link} from "react-router-dom";


class GradeSpace extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {

        return (

            <Col className={"gradespace"}>

                <p className={"text"}>Student: Jimmy Longbottom</p>
                <p className={"text"}>
                    Grade: [<input id="GradeInput" type="text" name="Grade" className={"gradeInput"}/>]/100
                </p>
                <p className={"text"}><Button tag={Link} to="/puzzle/124" >Submit Grade</Button></p>
            </Col>
        );
    }

}

export default GradeSpace;