import React, { Component } from 'react'
import {login,islogin} from '../helpers/auth'

export default class Login extends Component{

   handleClick(e) {
    e.preventDefault();
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
login(email,password).then(function(user) {
  // alert("sign in success");
 //  user = islogin();
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
});
  }
       render() {
       return (
         <div className="col-sm-6 col-sm-offset-3">
           <h2>Form login</h2>
        <form>
     <div className="form-group">
        <label>User name: </label>
        <input className="form-control" type="text"  name="username" id="username"/> 
    </div>
 <div className="form-group">
        <label>Password: </label>
        <input className="form-control"  type="password" name="password" id="password"/>
 </div>
   <div className="form-group">
        <label>Sign in: </label>
        <button className="btn btn-primary" onClick={this.handleClick} id="signin" type="button" name="signin">Sign in</button>
 </div>
</form>
</div>
        );
  }
}