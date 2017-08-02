import React, { Component } from 'react'
import { auth } from '../helpers/auth'

// function setErrorMsg(error) {
//   return {
//     registerError: error.message
//   }
// }
export default class Register extends Component {
  handleSubmit(e){
    e.preventDefault();
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    auth(email,password).then(function(user) {
    alert("Register success");
})
.catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
})
      //.catch(e => this.setState(setErrorMsg(e)))
  }
         render() {
       return (
         <div className="col-sm-6 col-sm-offset-3">
           <h2>Form Register</h2>
        <form onSubmit={this.handleSubmit}>
     <div className="form-group">
        <label>User name: </label>
        <input className="form-control" type="text" name="username" id="username"/> 
    </div>
 <div className="form-group">
        <label>Password: </label>
        <input className="form-control" type="password" name="password" id="password"/>
 </div>

   <div className="form-group">
        <label></label>
        <button className="btn btn-primary" id="register" type="submit" name="signin">Register</button>
 </div>
</form>
</div>
        );
  }
}
