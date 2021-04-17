import React from 'react'
import './TeacherHome.css';
import {
    Row, Button, Col
} from 'reactstrap';
import CardLayout, {CardCategory} from "../../components/CardLayout";
import ContentCard from "../../components/ContentCard";
import Course from "../../Course";


class TeacherHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let courses = Course.getCourses();
        return (
            <Row className="TeacherHome">
                <Col xs={"12"} md={"8"}>
                    <CardLayout>
                        <CardCategory title={"Current Classes"}>
                            <ContentCard course={courses[0]} />
                            <ContentCard course={courses[0]} />
                        </CardCategory>
                        <CardCategory title={"Previous Classes"}>
                            <ContentCard course={courses[0]} />
                            <ContentCard course={courses[0]} />
                            <ContentCard course={courses[0]} />
                            <ContentCard course={courses[0]} />
                        </CardCategory>
                    </CardLayout>
                </Col>
                <Col>
                    <Button>Add New Class</Button>
                </Col>


            </Row>
        );
    }
}

export default TeacherHome;