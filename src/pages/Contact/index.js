import React, { Component } from 'react';

import './style.css';
import gmail from './gmail.png';
import facebook from './facebook.png';

class Contact extends Component {
    render() {
        return (
            <div className="wrap-contact">
                <div className="head-contact">
                    <h2>Contact</h2>
                </div>
                <div className="contact">
                    <p>“If I had asked people what they wanted,
                        they would have said faster horses. ”<br/> - Henry Ford</p>
                    <div className="link">
                        <a target="_blank" href="mailto:nike.kpi1990@gmail.com"><img src={gmail} width={48} alt=""/>nike.kpi1990@gmail.com</a>
                        <a target="_blank" href="https://www.facebook.com/nikita.moksunov.7"><img src={facebook} width={48} alt=""/>facebook.com/nikita.moksunov.7</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;