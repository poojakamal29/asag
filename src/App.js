import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Faculty from './components/pages/Faculty';
import FacultyCardOne from './components/pages/FacultyCardOne';
import FacultyCardTwo from './components/pages/FacultyCardTwo';
import FacultyCardThree from './components/pages/FacultyCardThree';
import Student from './components/pages/Student';
import Studentlist from './components/pages/Studentlist';
//import Login from './login.js';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/faculty' component={Faculty} />
          <Route path='/facultycardone' component={FacultyCardOne} />
          <Route path='/facultycardtwo' component={FacultyCardTwo} />
          <Route path='/facultycardthree' component={FacultyCardThree} />
          <Route path='/student' component={Student} />
          <Route path='/studentlist' component={Studentlist} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
