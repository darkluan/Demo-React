import React, { Component } from 'react'
import {GetUsers} from '../../helpers/auth'
export default class Dashboard extends Component {
  constructor(props){
            super(props)
              this.state={
             list:[{name:"luan",phone:"11111"}]
        }
          }
  componentWillMount() {
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
       return(<div key={index}>
        <div className="col-sm-4" >{u.name}</div>
        <div className="col-sm-4">{u.phone}</div>
        <div className="col-sm-4"><a href="#">Edit</a></div>
        </div>)
        });  
    return (
      <div className="col-sm-6 col-sm-offset-3">
          <h2>List</h2>
       {userlist}
      </div>
    )
  }
componentDidMount(){}
}