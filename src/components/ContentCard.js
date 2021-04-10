import React from "react";
import './ContentCard.css';
import {Card, CardImg} from "reactstrap";

class ContentCard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg>

                    </CardImg>
                </Card>
                {this.props.text}
            </div>
        );
    }

}

export default ContentCard;