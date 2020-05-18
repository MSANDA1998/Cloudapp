import React, {Component} from 'react'
import {connect} from 'react-redux'
import {connexion} from '../../store/actions/authActions'

class Connexion extends Component {
    state = {
        email: '',
        password:''

    }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value

    })
}
handleSubmit = (e) => {
    e.preventDefault();
    this.props.Connexion(this.state);
}

    render() {
        const {authError} = this.props
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Connexion</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Mot de Passe</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Connexion</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>

                </form>

            </div>
        )
        }
    }

    const mapStateToProps = (state) => {
        return {
            authError: state.auth.authError
        }
    }


const mapDispatchToProps = (dispatch) => {
    return {
        Connexion: (creds) => dispatch(connexion(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Connexion)