import React from 'react'
import './TeacherHome.css';
import {
    Row, Button, Col
} from 'reactstrap';
import CardLayout, {CardCategory} from "../../components/CardLayout";
import ContentCard from "../../components/ContentCard";
import Course from "../../Course";
import TurtleButton from "../../components/TurtleButton";


class TeacherHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let courses = Course.getCourses();
        return (
            <React.Fragment>
                <Row className={"d-flex flex-row-reverse"}>
                    <TurtleButton className={"col-4 turtle-button-expanded"}>Add New Class</TurtleButton>
                </Row>
                <Row>
                    <CardLayout>
                        <CardCategory title={"Current Classes"}>
                            <ContentCard course={courses[0]} showBadge />
                            <ContentCard course={courses[1]} showBadge />
                        </CardCategory>
                        <CardCategory title={"Previous Classes"}>
                            <ContentCard course={courses[2]} showBadge />
                            <ContentCard course={courses[3]} showBadge />
                            <ContentCard course={courses[4]} showBadge />
                            <ContentCard course={courses[5]} showBadge />
                        </CardCategory>
                    </CardLayout>
                </Row>
            </React.Fragment>
        );
    }
}

export default TeacherHome;