import React from "react";
import './CardLayout.css';
import { Row, Col } from 'reactstrap';
import ContentCard from "./ContentCard";

class CardCategory extends React.Component {

    constructor(props) {
        super(props);
        //use prop "name" to render the category title
        //then render the categories' children cards
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
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
            <div>
                <div>
                    <h1><u>{this.props.topText}</u></h1>
                </div>
                <Row>
                    <Col><ContentCard course={this.props.class1} date={this.props.date1} notifications={this.props.notifications1} grade={this.props.grade1} link={this.props.link}/></Col>
                    <Col><ContentCard course={this.props.class2} date={this.props.date2} notifications={this.props.notifications2} grade={this.props.grade2} link={this.props.link}/></Col>
                </Row>
                
                <div>
                    <h1><u>{this.props.bottomText}</u></h1>
                </div>
                <Row>
                    <Col><ContentCard course={this.props.class3} date={this.props.date3} grade={this.props.grade3} link={this.props.link}/></Col>
                    <Col><ContentCard course={this.props.class4} date={this.props.date4} grade={this.props.grade4} link={this.props.link}/></Col>
                    <Col><ContentCard course={this.props.class5} date={this.props.date5} grade={this.props.grade5} link={this.props.link}/></Col>
                    <Col><ContentCard course={this.props.class6} date={this.props.date6} grade={this.props.grade6} link={this.props.link}/></Col>
                </Row>

            </div>
        );
    }

}

export default CardLayout;