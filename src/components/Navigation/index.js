import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './style.css'

class Nav extends Component {
    render () {
        return (
            <ul className="menu-main">
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/abilities">Abilities</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        )
    }
}

export default Nav