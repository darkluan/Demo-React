import React, { Component } from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {
//   componentWillMount() {
//   var data=[];
//   GetUsers().once('value',function (snap){
//  snap.forEach(function (snapchild) {
//   data.push(snapchild.val());
//  });
// })
// var {dispatch}=this.props;
//     dispatch({type:'ADD_ITEM',data})
//     }

render() {
  var userlist = this.props.list.map(function(u,index){
       return(<div key={index}>
        <div className="col-sm-4" >{u.name}</div>
        <div className="col-sm-4">{u.phone}</div>
        <div className="col-sm-4"><a href="#">Edit</a></div>
        </div>)
        });  
    return (
      <div className="col-sm-12 col-sm-offset-3">
          <h2>List</h2>
       {userlist}
      </div>
    )
  }
} 
export default //Dashboard
connect(function(state){
return{list:state.list}
})(Dashboard);