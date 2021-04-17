import React from "react";
import './CardLayout.css';
import { Row, Col } from 'reactstrap';
import ContentCard from "./ContentCard";
import Course from "../Course.js";

class CardCategory extends React.Component {

    constructor(props) {
        super(props);
        //use prop "name" to render the category title
        //then render the categories' children cards
    }

    render() {
        return (
            <Row className={"card-category"}>
                <Row className={"card-category-title"}>
                    {this.props.title}
                </Row>
                <Row className={"card-category-listing"}>
                    {this.props.children}
                </Row>
            </Row>
        );
    }
}

/*
Usage:

<CardLayout>
  <CardCategory name="Current Classes">
    <ContentCard />
    <ContentCard />
    ...
    <ContentCard />
  </CardCategory>
</CardLayout>
 */
class CardLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col xs={"12"} className={"card-layout"}>
                {this.props.children}
            </Col>
        );
    }

}

export {
    CardCategory
};
export default CardLayout;