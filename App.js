import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Connexion from './components/auth/Connexion'
import Inscription from './components/auth/Inscription'
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import Profile from './components/dashboard/Profile';
import NouveauFichier from './components/fichiers/NouveauFichier';
import ListesDesFichiers from './components/fichiers/ListesDesFichiers';



class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/Connexion' component={Connexion} />
        <Route path='/Inscription' component={Inscription} />
        <Route path='/NouveauFichier' component={NouveauFichier} />
        <Route path='/Profile' component={Profile} />
        <Route path='/ListesDesFichiers' component={ListesDesFichiers} />


      </Switch>
      </div>
    </BrowserRouter>
   );
}
}
export default App;
