// import * as firebase from "firebase/app";
// import "firebase/auth";
// import { useContext, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import { UserContext } from "../../App";
// import firebaseConfig from './Firebase.config';

// var [loggedInUser, setLoggedInUser] = useContext(UserContext)
// const location = useLocation();
// const history = useHistory();
// const { from } = location.state || { from: { pathname: "/" } };

// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('')
// const [cPassword, setCpassword] = useState('')



// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }


// export const createUserWithEmailAndPassword = () => {
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//         // Handle Errors here.

//         const signedInUser = { name, email };
//         setLoggedInUser(signedInUser)
//         history.replace(from)


//         var errorCode = error.code;
//         console.log(errorCode)
//         var errorMessage = error.message;
//         console.log(errorMessage)
//         // ...

//         if (password !== cPassword) {
//             alert("Passwords don't match");
//             setLoggedInUser('')
//         } else {
//             setLoggedInUser(signedInUser)
//         }
//     });
// };

// export const signInWithEmailAndPassword = () => {
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         // Handle Errors here.

//         const signedInUser = { email, name };
//         setLoggedInUser(signedInUser)
//         history.replace(from)
//         console.log("email", email)

//         var errorCode = error.code;
//         console.log(errorCode)
//         var errorMessage = error.message;
//         console.log(errorMessage)
//         // ...
//     });
// };
// export const signInWithPopupGoogleProvider = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(googleProvider).then(function (result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var { displayName, email } = result.user;

//         const signedInUser = { name: displayName, email };
//         setLoggedInUser(signedInUser)
//         history.replace(from)
//         console.log("Google", signedInUser)



//         // ...
//     }).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         console.log(errorMessage)
//         // ...
//     });
// }

// export const signInWithPopupFbProvider = () => {
//     const fbProvider = new firebase.auth.FacebookAuthProvider();

//     firebase.auth().signInWithPopup(fbProvider).then(function (result) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.

//         const { displayName, email } = result.user;

//         const signedInUser = { name: displayName, email }
//         console.log("Facebook".signedInUser)
//         setLoggedInUser(signedInUser)
//         history.replace(from)
//         console.log(signedInUser)
//         // ...
//     }).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//         console.log(errorMessage)
//     });
// }


