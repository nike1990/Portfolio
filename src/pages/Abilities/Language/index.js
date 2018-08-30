import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Language extends Component {
    render() {
        return (
            <div className="wrap-abilities">
                <div className="head-abilities">
                    <h2>Profile</h2>
                    <p>I'm a creative Front-End developer</p>
                </div>

                <div className="skills">
                    <div className="but">
                        <Link to="/skills"><button className="button">Skills</button></Link>
                        <Link to="/language"><button className="button">Language</button></Link>
                    </div>
                    <div className="lang">
                        <div className="langConteiner">
                            <div className="langName">English:</div>
                            <div className="langSkill">Native</div>
                        </div>
                        <div className="langConteiner">
                            <div className="langName">Ukrainian:</div>
                            <div className="langSkill">Native</div>
                        </div>
                        <div className="langConteiner">
                            <div className="langName">Russian:</div>
                            <div className="langSkill">Native</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Language;