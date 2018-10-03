import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Skills extends Component {
    render() {
        return (
            <div className="wrap-abilities">
                <div className="head-abilities">
                    <h2>Profile</h2>
                </div>

                <div className="skills">
                    <div className="but">
                        <Link to="/skills"><button className="button">Skills</button></Link>
                        <Link to="/language"><button className="button">Language</button></Link>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">HTML5</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">JavaScript</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">Gulp</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">React</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">CSS3</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">Node.js</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                    <div className="skillBlok">
                        <div className="nameSkill">Redux</div>
                        <div className="valueSkill">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circleEmpty"></div>
                            <div className="circleEmpty"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Skills;