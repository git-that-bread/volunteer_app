import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render(){
        return(
            <nav className ="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Volunteer Home</Link>
                <div className="collapse navbar-collapse">
                <ul className="nav nav-pills">       
                    <li className="navbar-item active">
                    <Link to="/volunteer" className="nav-link">Volunteer List</Link>
                    </li>
                    <li className="navbar-item active">
                    <Link to="/orgs/add" className="nav-link">Create an Organization</Link>
                    </li>
                    <li className="navbar-item active">
                    <Link to="/volunteer/add" className="nav-link">Create a Volunteer Account</Link>
                    </li> 
                </ul>    
                </div>
            </nav>
        );
    }
}
