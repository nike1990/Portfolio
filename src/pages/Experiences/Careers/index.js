import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './style.css';

class Careers extends Component {
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
                        <h4>PHP-Academy</h4>
                        <p>02-13-2017 - current time</p>
                    </div>
                    <div className="infoCont">
                        <h4>Junior Front-End</h4>
                        <p>Work on interesting project and develop my skills, work with:
                            HTML5, CSS3, GULP, JavaScript, React.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Careers;