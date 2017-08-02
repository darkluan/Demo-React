import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    //.then(saveUser)
}

export function islogin () {
  return firebaseAuth().currentUser;
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}
export function addUser(name,phone) {
   return ref.child("users")
    .push({
     name: name,
     phone: phone,
  },function(error){
           if (error) {
        alert("Data could not be saved." + error);
    } else {
        alert("Data saved successfully.");
    }
    });
}


export function GetUsers() {
return ref.child("users")
}

// export function saveUser (user) {
//   return ref.child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }
