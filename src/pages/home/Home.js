import React from 'react'
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <h1>Home Page (unauthenticated)</h1>
                <a href="/login">Login</a><br />
                <a href="/course">Course</a><br />
                <a href="/customize">Customize</a><br />
                <a href="/sandbox">Sandbox</a>
            </div>
        );
    }
}

export default Home;
