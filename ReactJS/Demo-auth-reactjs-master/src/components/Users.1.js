import React, { Component } from 'react'
import { addUser,GetUsers } from '../helpers/auth'
import {Field, reduxForm} from 'redux-form'
import store from '../reducers/reducer'
import { createStore } from 'redux';
 class Users extends Component {
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

  componentDidMount(){
    var data=[];
  GetUsers().once('value',function (snap){
 snap.forEach(function (snapchild) {
  data.push(snapchild.val());
 });
})
  this.setState({
                list:data
                })
    }
render() {
  var userlist = this.state.list.map(function(u,index){
       return <div key={index}>
        <div className="col-sm-4" >{u.name}</div>
        <div className="col-sm-4">{u.phone}</div>
        <div className="col-sm-4"><a href="#">Edit</a></div>
        </div>
        });  
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>Form add contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>Full name: </label>
           <Field name="name" component={name =>
          <div>
             <input className="form-control" type="text" {...name} name="name" id="name"/>
             {name.touched && name.error && <span>{name.error}</span>}
          </div>
        }/>
          </div>
          <div className="form-group">
            <label>Phone: </label>
              <Field name="password" component={phone =>
          <div>
              <input  type="text" {...phone} className="form-control" name="phone" id="phone"/>
            {phone.touched && phone.error && <span>{phone.error}</span>}
          </div>
        }/>
          </div>
          <div className="form-group">
            <label></label>
            <button className="btn btn-primary" id="register" disabled={!this.props.valid} type="submit" name="signin">add user</button>
          </div>
        </form>
       {userlist}
      </div>
    )
  }
  
}
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  }
  return errors
}
Users = reduxForm({
  form: 'Users'
})(Users)
export default Users
