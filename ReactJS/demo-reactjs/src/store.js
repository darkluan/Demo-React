import {GetUsers} from './helpers/auth'
var redux = require('redux')

// var defaultstate={
//     mag:['android','ios','nodejs'],
//     isAdding:false}

// var reducer=(state=defaultstate,action)=>{
//     switch (action.type) {
//         case 'TOGGLE_IS_ADDING':
// return{...state,isAdding:!state.isAdding}  
// case 'ADD_ITEM':
// return {...state,mag:[...state.mag,action.item]}     
// case 'REMOVE_ITEM':
// return {...state,mag:state.mag.filter((e,i)=>i!=action.index)}       
//         default:
//             return state;
//     }
// }
//reducer funtion list
   

var listReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_ITEM':
            return action.data
        // case 'REMOVE_ITEM':
        // return  state.filter(
        //     )
        default:
            return state;
    }
}
// /reducer funtion add
var addReducer=(state=false,action)=>{
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
         return !state 
        default:
            return state;
    }
}
//combie reducer funtion
var reducer = redux.combineReducers({
    list:listReducer,
    add:addReducer
})
//store
var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension?window.devToolsExtension():f=>f
))

// store.subscribe(()=>
// {
// var str =store.getState();
// document.getElementById('apptest').innerHTML=JSON.stringify(str)
// })
       var data =[];
           GetUsers().once('value', function (snap) {
                snap.forEach(function (snapchild) {
                    data.push(snapchild.val());
                });
            })
//store.dispatch({type:'TOGGLE_IS_ADDING'})
 store.dispatch({type:'LIST_ITEM',data:data})
//store.dispatch({type:'REMOVE_ITEM',index:1})
export default store