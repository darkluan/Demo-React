import React, { Component } from 'react'
import { addUser,GetUsers } from '../helpers/auth'

export default class Users extends Component {
    constructor(props) {
    super(props);
      this.state={
             list:[],
        }
  }
  handleSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    addUser(name, phone);
  }

render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>Form add </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>Full name: </label>
            <input className="form-control" type="text" name="name" id="name"/>
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input className="form-control" name="phone" id="phone"/>
          </div>
          <div className="form-group">
            <label></label>
            <button id="register" type="submit" name="signin">add user</button>
          </div>
        </form>
      </div>
    )
  }
  
}
