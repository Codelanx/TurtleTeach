import React from "react";
import './ContentCard.css';
import {Card, CardImg, Button} from "reactstrap";

class ContentCard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Card>

                    <div>
                        <CardImg src="/img/turtle.png" alt="this was supposed to be a turtle" width="100" height="350" />
                    </div>

                    <div id="BottomTextClass">
                        <div>
                            <a href="#top" id="link">Introduction to TurtleTeach</a>
                            <Button>Grade: B+</Button>
                        </div>
                    </div>
                    <div>
                        *Unsure how to shrink image/card*
                    </div>


                </Card>
                {this.props.text}
            </div>
        );
    }

}

export default ContentCard;