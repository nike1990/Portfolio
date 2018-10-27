import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './style.css';

class Education extends Component {
    render() {
        return (
            <div className="wrapExp">
                <div className="head-experiences">
                    <h2>Experience</h2>
                </div>
                <div className="wrapSkills">
                    <div className="buttonCont">
                        <Link to="/education"><button className="buttonQ">Education</button></Link>
                        <Link to="/careers"><button className="buttonQ">Careers</button></Link>
                    </div>
                    <div className="infoCont right">
                        <h4>NTUU KPI</h4>
                        <p>2008 - 2014</p>
                    </div>
                    <div className="infoCont ">
                        <h4>Specialist - Information Technology in Instrument Making</h4>
                        <p>There were listened programming courses: Fundamentals of Algorithmization and Structured Programming,
                            Object-Oriented Programming,
                            Databases</p>
                    </div>
                    <div className="infoCont right">
                        <h4>PHP-Academy</h4>
                        <p>02-13-2017 - current time</p>
                    </div>
                    <div className="infoCont ">
                        <h4>Front-End web developer</h4>
                        <p>In this course I learned about JavaScript, React,
                            ES6, Node.js, NPM, Gulp, MVC Git and more...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;