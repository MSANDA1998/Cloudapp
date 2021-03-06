import React, {Component} from 'react'
import {redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {SignUp} from '../../store/actions/authActions'

class Inscription extends Component {
    state = {
        email: '',
        password:'',
        firstname:'',
        lastname: '',

    }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value

    })
}
handleSubmit = (e) => {
    e.preventDefault();
    this.props.SignUp(this.state)

}

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Inscription</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" id="firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Mot de Passe</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                      <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Inscription</button>
                    </div>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: (newUser) => dispatch(SignUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inscription)