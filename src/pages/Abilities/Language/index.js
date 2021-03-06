import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Language extends Component {
    render() {
        return (
            <div className="wrap-abilities">
                <div className="head-abilities">
                    <h2>Abilities</h2>
                </div>

                <div className="skills">
                    <div className="but">
                        <Link to="/skills"><button className="button">Skills</button></Link>
                        <Link to="/language"><button className="button">Languages</button></Link>
                    </div>
                    <div className="lang">
                        <div className="langConteiner">
                            <div className="langName">English:</div>
                            <div className="langSkill">Basic</div>
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