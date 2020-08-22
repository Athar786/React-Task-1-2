import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import { Navigation } from './Navbar/Navigation';
import { NavLink, Form } from 'react-bootstrap';
import App1 from './task1';
import App2 from './task2';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
           
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path="/task1" component={App1}/>
        <Route path="/task2" component={App2}/>
       
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
