import logo from './logo.svg';
import React,{ Component } from "react";
import './App.css';
import Motormenu from './Motormenu';
import Motorspec from './Motorspec';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className ="App">
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path="/motormenu" component={Motormenu}/>
          <Route path="/motorspec" component={Motorspec}/>
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div className = "Menu">
    <Link>MENU</Link>
    <h1>
      FAULT DETECTION MOTOR
    </h1>
  </div>

);
export default App;
