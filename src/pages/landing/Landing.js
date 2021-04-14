import React from "react";
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";
import StudentHome from "../StudentHome/StudentHome";
import TeacherHome from "../TeacherHome/TeacherHome";

class Landing extends React.Component {

    static LENGTH = 3;
    static ITEMS = [
        {
            //ahh, hardcoded svg, yum
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'Turtles are cool I guess',
            caption: 'Welcome to TurtleTeach'
        },
        {
            //ahh, hardcoded svg, yum
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'I like turtles',
            caption: 'Welcome to TurtleTeach'
        },
        {
            //ahh, hardcoded svg, yum
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'TURRRRRTLE',
            caption: 'Welcome to TurtleTeach'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {index: 0, animating: false};
        this.slides = Landing.ITEMS.map((item) => {
            return (
                <CarouselItem onExiting={this.setAnim(true)} onExited={() => this.setAnim(false)} key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
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
            <div>
                <Carousel activeIndex={this.state.index} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={Landing.ITEMS} activeIndex={this.state.index} onClickHandler={this.setIndex} />
                    {this.slides}
                    <CarouselControl direction={"prev"} directionText={"Previous"} onClickHandler={this.previous} />
                    <CarouselControl direction={"next"} directionText={"Next"} onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }

}


class isLogged extends React.Component {
    render() {
        function whichLanding(profile){

            if(profile.isLoggedIn()) {
                if(profile.getCurrentUser().isTeacher()) {
                    return (
                        <TeacherHome/>
                    );
                }
                return (<StudentHome/>);
            }
            return (<Landing profile/>);
        }

        return (whichLanding(this.props.profile));

    }
}


export default isLogged;