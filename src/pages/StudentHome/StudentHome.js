import React from 'react'
import './StudentHome.css';
import {
    Row, Col, Button
} from 'reactstrap';
import CardLayout, {CardCategory} from "../../components/CardLayout";
import {Link} from "react-router-dom";
import TurtleButton from "../../components/TurtleButton";
import ContentCard from "../../components/ContentCard";
import Course from "../../Course";

function AvatarContainer(props) {
    return (
        <Row className={"avatar-container"}>
            <Link to={"/customize"}>
                <img className={"customize-avatar"} src={"/img/turtle.png"} alt="this was supposed to be the users profile image" />
            </Link>
        </Row>
    );
}

class StudentHome extends React.Component {

    constructor(props) {
        super(props);
    }


    example() {

    }


    render() {
        let courses = Course.getCourses();
        return (
            <Row className={"nopad"}>
                <Col xs={"12"} md={"8"}>
                    <CardLayout>
                        <CardCategory title={"Current Classes"}>
                            <ContentCard course={courses[0]} showGrade />
                            <ContentCard course={courses[0]} showGrade />
                        </CardCategory>
                        <CardCategory title={"Previous Classes"}>
                            <ContentCard course={courses[0]} showGrade />
                            <ContentCard course={courses[0]} showGrade />
                            <ContentCard course={courses[0]} showGrade />
                            <ContentCard course={courses[0]} showGrade />
                        </CardCategory>
                    </CardLayout>
                </Col>
                <Col xs={"12"} md={"4"}>
                    <span>My Avatar:</span>
                    <AvatarContainer />
                    <Link to={"/customize"}><TurtleButton expand>Customize</TurtleButton></Link>
                    <Link to={"/sandbox"}><TurtleButton expand>Free Range</TurtleButton></Link>
                    <Link to={"#"}><TurtleButton expand>More Puzzles</TurtleButton></Link>
                </Col>
            </Row>
        );
    }
}

export default StudentHome;