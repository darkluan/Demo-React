import React, { Component } from 'react'
import { addUser } from '../helpers/auth'
import {connect} from 'react-redux'

 class Users extends Component {
  handleSubmit=(e)=> {
    e.preventDefault();
    addUser(this.refs.name.value, this.refs.phone.value);
  }
render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>Form add </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>Full name: </label>
            <input className="form-control" type="text" ref="name" />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input className="form-control" ref="phone" />
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
export default Users
//  connect( function(state){
//   return state
// })(Users)