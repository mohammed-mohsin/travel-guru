import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import Logo from '../../images/Logo.png'
import * as firebase from "firebase/app";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
const HeaderDark = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Handle Sign Out

    const handleSignOut = () => {
        // Sign Out 
        firebase.auth().signOut().then(function () {
            const signedOutUser = {};
            setLoggedInUser(signedOutUser)
            history.replace(from)
        }).catch(function (error) {

            console.log(error)
        });
    }
    return (
        <div className="header container  ">

            <Navbar   >
                <Link to="/home">
                    <Navbar.Brand className="mr-5" ><img src={Logo} width="100" alt="Logo" /></Navbar.Brand>
                </Link>
                <Nav className="ml-auto">
                    <Nav.Link className="ml-lg-3 ml-md-2 text-dark" href="#home">News </Nav.Link>
                    <Nav.Link className="ml-lg-3 ml-md-2 text-dark" href="#home">Destination </Nav.Link>
                    <Nav.Link className="ml-lg-3 ml-md-2 text-dark" href="#features">Blog</Nav.Link>
                    <Nav.Link className="ml-lg-3 ml-md-2 text-dark" href="#pricing">Contact</Nav.Link>
                </Nav>
                <h5> {loggedInUser.name}</h5>
                <Button onClick={handleSignOut} className="ml-lg-5 ml-md-3" variant="warning">Sign Out</Button>
            </Navbar>
        </div >
    );
};

export default HeaderDark;