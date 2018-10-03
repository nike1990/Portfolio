import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './style.css';

class Careers extends Component {
    render() {
        return (
            <div className="wrapExp">
                <div className="head-experiences">
                    <h2>Experiences</h2>
                </div>
                <div className="wrapSkills">
                    <div className="buttonCont">
                        <Link to="/education"><button className="buttonQ">Education</button></Link>
                        <Link to="/careers"><button className="buttonQ">Careers</button></Link>
                    </div>
                    <div className="infoCont right">
                        <h4>Freelance</h4>
                        <p>04-06-2016 - 09-03-2017</p>
                    </div>
                    <div className="infoCont">
                        <h4>Junior Front-End</h4>
                        <p>Work on customer project and improve my skills,work with: HTML5
                            , CSS3 , GULP , Boostrap , JavaScript, JQwery</p>
                    </div>
                    <div className="infoCont right">
                        <h4>PHP-Academy</h4>
                        <p>01-07-2017 - current time</p>
                    </div>
                    <div className="infoCont">
                        <h4>Junior Front-End</h4>
                        <p>Work on interesting project and develop my skills, work with:
                            HTML5 , CSS3 , GULP , Boostrap , JavaScript, JQwery</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Careers;