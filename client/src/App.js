import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from "./components/links.component"
import VolunteersList from "./components/VolunteerList.component";
import AddVolunteer from "./components/AddVolunteer.component";
import EditVolunteer from "./components/EditVolunteer.component";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <Links />
      
       <Route path = "/" exact component={VolunteersList}/>
       <Route path = "/add" component={AddVolunteer}/>
       <Route path = "/edit" component ={EditVolunteer}/>
      </Router>
    );
  }
}

export default App;
