import React, { useContext, useEffect, useState } from 'react';
import "./Login.css";
import iconGoogle from '../../images/Icon/google.png';
import iconFacebook from '../../images/Icon/fb.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import HeaderDark from '../Header/HeaderDark';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const location = useLocation();
    const history = useHistory();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cPassword, setCpassword] = useState('')






    // Creat User

    const handleSignUp = (e) => {
        e.preventDefault();


        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.

            const signedInUser = { name, email };
            setLoggedInUser(signedInUser)
            history.replace(from)


            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...

            if (password !== cPassword) {
                alert("Passwords don't match");
                setLoggedInUser('')
            } else {
                setLoggedInUser(signedInUser)
            }
        });

    }



    // LogIn User 



    const handleSignIn = (e) => {

        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.

            const signedInUser = { email, name };
            setLoggedInUser(signedInUser)
            history.replace(from)
            console.log("email", email)

            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
        });

    }



    // Google Login


    const handleGoogleSignIn = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var { displayName, email } = result.user;

            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser)
            history.replace(from)
            console.log("Google", signedInUser)



            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorMessage)
            // ...
        });
    }



    // Facebook Login

    const handleFacebookSignIn = () => {

        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.

            const { displayName, email } = result.user;

            const signedInUser = { name: displayName, email }
            console.log("Facebook".signedInUser)
            setLoggedInUser(signedInUser)
            history.replace(from)
            console.log(signedInUser)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage)
        });
    }

    return (
        <div className="login">
            <HeaderDark />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <h3>Create an account</h3>
                            <div className="from-group">
                                <form >
                                    <div className="form-group float-label-control label-bottom">

                                        <input onChange={event => setName(event.target.value)} required type="text" className="form-control" placeholder=" Name" />

                                        <br />
                                        <input onChange={event => setEmail(event.target.value)} required type="email" className="form-control" placeholder="Email" />
                                        <br />
                                        <input onChange={event => setPassword(event.target.value)} required type="password" className="form-control" placeholder="Password" />

                                        <br />
                                        <input onChange={event => setCpassword(event.target.value)} required type="password" className="form-control" placeholder="Confirm Password" />
                                        <br />
                                        <br />
                                        <button onClick={handleSignUp} type="submit" className="btn  btn-block btn-warning" value="Create an account" >Create an account</button>


                                        <br />
                                        <br />
                                        <div className="or "></div>
                                    </div>
                                </form>
                                <br />
                                <br />
                                <button onClick={handleGoogleSignIn} className="btn  btn-block btn-light"> <span>  <img width="20" src={iconGoogle} alt="" /></span>   Continue with Google </button>
                                <br />
                                <br />
                                <button onClick={handleFacebookSignIn} type="submit" className="btn  btn-block btn-light"><span>  <img width="20" src={iconFacebook} alt="" /></span>   Continue with Facebook</button>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <h3>Login</h3>
                            <div className="from-group">
                                <form >
                                    <div className="form-group float-label-control label-bottom">


                                        <br />
                                        <input onChange={event => setEmail(event.target.value)} required type="email" className="form-control" placeholder="Email" />
                                        <br />
                                        <input onChange={event => setPassword(event.target.value)} required type="password" className="form-control" placeholder="Password" />

                                        <br />
                                        <br />

                                        <button onClick={handleSignIn} type="submit" className="btn  btn-block btn-warning" value="Login" >Login</button>



                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;