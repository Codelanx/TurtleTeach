import React from "react";
import './CardLayout.css';

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
                    <h1><u>Current Classes</u></h1>
                </div>

                
                <div>
                    <h1><u>Previous Classes</u></h1>
                </div>
                {this.props.text}
            </div>
        );
    }

}

export default CardLayout;