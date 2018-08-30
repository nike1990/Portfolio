import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './style.css';

class Experiences extends Component {
    render() {
        return (
            <div className="wrapExp">
                <div className="head-experiences">
                    <h2>Experiences</h2>
                    <p>I'm a creative Front-End developer</p>
                </div>
                <div className="wrapSkills ">
                    <div className="buttonCont">
                        <Link to="/education"><button className="buttonQ">Education</button></Link>
                        <Link to="/careers"><button className="buttonQ">Careers</button></Link>
                    </div>
                    <div className="infoCont right">
                        <h4>NPU Dragomava</h4>
                        <p>2015 - current time</p>
                    </div>
                    <div className="infoCont left">
                        <h4>Bachelor - Software Engineering</h4>
                        <p>The education was mainly C++ , C# , SQL based programming,
                            and I also learned about SQL, PHP, MVC, UML and more.</p>
                    </div>
                    <div className="infoCont right">
                        <h4>PHP-Academy</h4>
                        <p>02-13-2017 - current time</p>
                    </div>
                    <div className="infoCont left">
                        <h4>Full-stack web developer</h4>
                        <p>In this course i learned about PHP , JavaScript , React ,
                            ES7 , MySql , Node.js , MongoDb , NPM , Gulp , MVC Git and more...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experiences;