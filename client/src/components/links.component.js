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
                    <Link to="/" className="nav-link">Volunteer List</Link>
                    </li>
                    <li className="navbar-item active">
                    <Link to="/add" className="nav-link">Add Volunteer</Link>
                    </li> 
                </ul>    
                </div>
            </nav>
        );
    }
}
