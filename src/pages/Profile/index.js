import React, { Component } from 'react';

import './style.css';
import myFoto from './_MG_4402-min.jpg'

class Profile extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="head">
                    <h2>Profile</h2>
                    <p>I'm a creative Front-End developer</p>
                </div>
                <div className="content">
                    <div className="about">
                        <h3>About me</h3>
                        <p>I'm a responsible and self-confident person
                            I love structure and order and I also stand for quality.
                            I love spending time on fixing little details and optimizing web apps.
                            Also I like working in a team
                        </p>
                    </div>
                    <div className='container-img'>
                        <img className='about-img' src={myFoto} width={400} alt=""/>
                    </div>
                    <div className="details">
                        <h3>Details</h3>
                        <p><span>Name:</span> Nikita Moksunov</p>
                        <p><span>Age:</span> 27</p>
                        <p><span>Location:</span> Kiev, Ukraine</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;