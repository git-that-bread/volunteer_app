import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.component';
import Authenticated from './components/Authenticated.component';
import LoginVolunteer from './components/LoginVolunteer.component';
import LoginOrganization from './components/LoginOrganization.component';
import SignupVolunteer from './components/SignupVolunteer.component';
import SignupOrganization from './components/SignupOrganization.component';

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/loginVolunteer" exact component={LoginVolunteer} />
          <Route path="/loginOrganization" exact component={LoginOrganization} />
          <Route path="/signupVolunteer" exact component={SignupVolunteer} />
          <Route path="/signupOrganization" exact component={SignupOrganization} />
          <Route path="/" exact component={Home} />
          <Authenticated>
            {/* All protected routes go here */}
            {/* <Route path="/dashboard" exact component={Dashboard}/> */}
          </Authenticated>
        </Switch>
      </BrowserRouter>
      // <Router>
      // <Links />
      
      //  {/* <Route path = "/volunteer" exact component={VolunteersList}/> */}
      //  <Route path = "/volunteer/add" component={AddVolunteer}/>
      //  <Route path = "/edit" component ={EditVolunteer}/>
      //  <Route path = "/orgs/add" component ={AddOrg}/>
      // </Router>
    );
  }
}

export default App;
