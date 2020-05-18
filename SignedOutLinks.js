import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className= "right">
            <li><NavLink to='/Inscription'>Inscription</NavLink></li>
            <li><NavLink to='/Connexion'>Connexion</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks