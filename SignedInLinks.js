import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Déconnexion} from '../../store/actions/authActions'

const SignedInLinks = (props) => {

    return(
        <ul className= "right">
            <li><NavLink to='/ListeDesFichiers'>Liste des Fichiers </NavLink></li>
            <li><NavLink to='/NouveauFichier'>Nouveau Fichier </NavLink></li>
            <li><a onClick= {props.Déconnexion}>Déconnexion</a></li>
            <li><NavLink to='/Profil' className='btn btn-floating pink lighten-1'>MM</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        Déconnexion: () => dispatch(Déconnexion())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)