import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './style.css'

class Nav extends Component {
    render () {
        return (
            <ul className="menu-main">
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/experiences">Experience</Link></li>
                <li><Link to="/abilities">Abilities</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
            </ul>

        )
    }
}

export default Nav