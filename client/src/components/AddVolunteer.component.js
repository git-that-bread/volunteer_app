import React, {Component} from 'react';
import axios from 'axios';

export default class AddVolunteer extends Component {
    constructor(props){
        super(props);

        this.whenNameModified = this.whenNameModified.bind(this);
        this.whenUserNameModified = this.whenUserNameModified.bind(this);
        this.submission = this.submission.bind(this);

        this.state ={
            name: '',
            username: '',
        }
    }

    whenNameModified(thisObject){
        this.setState({
            name: thisObject.target.value
        });
    }

    whenUserNameModified(thisObject){
        this.setState({
            username: thisObject.target.value
        });
    }

    submission(thisObject){
        thisObject.preventDefault();

        const newVolunteer = {
            name: this.state.name,
            username: this.state.username,
        }

        console.log(newVolunteer);

        axios.post('http://localhost:8000/volunteers/add', newVolunteer)
        .catch(function(err){
            console.log(err.response);
        });

        window.location = '/';
    }


    render() {
        return (
            <div style={{marginTop: 20}}>
            <h3>Add a Volunteer</h3>
            <form onSubmit={this.submission}>
                <div className="form-group">
                    <label>Volunteer's Name:</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.whenNameModified}/>
                </div>
                <div className="form-group">
                    <label>Volunteer's Username:</label>
                    <input type="text" className="form-control" value={this.state.username} onChange={this.whenUserNameModified}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}