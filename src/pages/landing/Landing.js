import React from "react";
import './Landing.css';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";

class Landing extends React.Component {

    static LENGTH = 3;
    static ITEMS = [
        {
            //ahh, hardcoded svg, yum
            src: '/img/turtle_base.png',
            altText: 'Turtles are cool I guess',
            caption: 'Welcome to TurtleTeach'
        },
        {
            //ahh, hardcoded svg, yum
            src: '/img/turtle_patriot.png',
            altText: 'I like turtles',
            caption: 'Welcome to TurtleTeach'
        },
        {
            //ahh, hardcoded svg, yum
            src: '/img/turtle_3.png',
            altText: 'TURRRRRTLE',
            caption: 'Welcome to TurtleTeach'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {index: 0, animating: false};
        this.slides = Landing.ITEMS.map((item) => {
            return (
                <CarouselItem onExiting={this.setAnim(true)} onExited={() => this.setAnim(false)} key={item.src} className={"slide-image"}>
                    <img src={item.src} alt={item.altText} className={"slide-image"}/>
                    <CarouselCaption captionText={item.altText} captionHeader={item.caption} className={"slide-text"}/>
                </CarouselItem>
            );
        });
    }

    previous = () => {
        var next = this.state.index - 1;
        if (next < 0) {
            next = Landing.LENGTH - 1;
        }
        this.setState({index: next});
    };

    next = () => {
        var next = this.state.index + 1;
        if (next >= Landing.LENGTH) {
            next = 0;
        }
        this.setState({index: next});
    };

    setIndex = (index) => {
        if (index < 0) {
            index = 0;
        } else if (index > Landing.LENGTH) {
            index = Landing.LENGTH - 1;
        }
        this.setState({index: index});
    };

    setAnim = (anim) => {
        this.setState({animating: anim});
    };

    render() {
        return (
            <div style={{"backgroundColor": "#666666"}}>
                <Carousel activeIndex={this.state.index} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={Landing.ITEMS} activeIndex={this.state.index} onClickHandler={this.setIndex}/>
                    {this.slides}
                    <CarouselControl direction={"prev"} directionText={"Previous"} onClickHandler={this.previous} />
                    <CarouselControl direction={"next"} directionText={"Next"} onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }

}


export default Landing;