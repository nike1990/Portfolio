import React, { Component } from 'react';

import './style.css';
import myFoto from './_MG_4402-min.jpg'

class Profile extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="head">
                    <h2>Profile</h2>
                </div>
                <div className="content">
                    <div className="about flex">
                        <h3>About me</h3>
                        <p>Hi! My name is Nikita. I like the expression
                            “Do your absolute best, and have a good time!”
                            It reflects my approach to work. I am responsible,
                            attentive to details and looking for the opportunity
                            to work hard. There is a problem - there is a solution!
                        </p>
                        <div className="details">
                            <h3>Details</h3>
                            <p><span>Name:</span> Nikita Moksunov</p>
                            <p><span>Age:</span> 28</p>
                            <p><span>Location:</span> Kiev, Ukraine</p>
                        </div>
                    </div>
                    <div className="flex myFoto">
                        <div className='container-img'>
                            <img className='about-img' src={myFoto} width={400} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;