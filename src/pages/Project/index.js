import React, { Component } from 'react';

import './style.css';
import img1 from '../../img/Waxom-Hemepage.png'
import img2 from '../../img/M-shop.png'
import img3 from '../../img/Golden-One-Page-Web-Template.png'

class Project extends Component {
    render() {
        return (
            <div className="wrapProject">
                <div className="head-project">
                    <h2>Projects</h2>
                </div>
                <div className="content-project">

                    <div className="proj1">
                        <a href="https://portfolio-mstore.herokuapp.com/" target="_blank">
                            <div className="hover"></div>
                            <img src={img2}  alt=""/>
                            <h2>M Store</h2>
                            <span>Shop</span>
                        </a>
                    </div>
                    <div className="proj1">
                        <a href="https://waxon-pr.herokuapp.com/" target="_blank">
                            <div className="hover"></div>
                            <img src={img1}  alt=""/>
                            <h2>Waxom</h2>
                            <span>Landing page</span>
                        </a>
                    </div>
                    <div className="proj1">
                        <a href="https://portfolio-landinggolden.herokuapp.com/" target="_blank">
                            <div className="hover"></div>
                            <img src={img3}  alt=""/>
                            <h2>Golden studio</h2>
                            <span>Landing page</span>
                        </a>
                    </div>

                </div>

            </div>
        );
    }
}

export default Project;