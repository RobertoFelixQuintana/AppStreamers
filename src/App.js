import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {HashRouter, Switch,Route} from 'react-router-dom'; 
import Home from './Routers/Home';
import {About} from './Routers/About';
import Questions from './Routers/Questions';
import Verification from './Routers/Verification';

export class App extends Component {
  render() {
    return (
      <>    
        <HashRouter basename="/">
          <Navbar/>
          <Switch>
            <Route path='/Inicio' exact component={Home}/>
            <Route path='/QuienesSomos' exact component={About}/>
            <Route path='/PreguntasFrecuentes' exact component={Questions}/>
            <Route path='/Perfil' exact component={Verification}/>
          </Switch>
        </HashRouter>
      </>
    )
  }
}

export default App;