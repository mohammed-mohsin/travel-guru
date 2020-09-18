import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import Logo from '../../images/Logo1.png'

import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header container  ">

            <Navbar bg="transparent"  >
                <Link to="/home">
                    <Navbar.Brand className="mr-5" ><img src={Logo} width="100" alt="Logo" /></Navbar.Brand>
                </Link>
                <Form inline className="search-bar col-xs-11 d-flex">
                    <FontAwesomeIcon className=" icon" icon={faSearch} />
                    <FormControl type="text" placeholder="Search" className=" pl-2 form-control  search" />
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link className="ml-lg-3 ml-md-2 text-light" href="#home">News </Nav.Link>
                    <Nav.Link className="ml-lg-3 ml-md-2 text-light" href="#home">Destination </Nav.Link>
                    <Nav.Link className="ml-lg-3 ml-md-2 text-light" href="#features">Blog</Nav.Link>
                    <Nav.Link className="ml-lg-3 ml-md-2 text-light" href="#pricing">Contact</Nav.Link>
                </Nav>
                <h5 className="text-light"> {loggedInUser.name}</h5>
                <Link to="/login"> <button className="btn ml-lg-5 ml-md-3  btn-warning">Login</button></Link>
            </Navbar>

        </div >
    );
};

export default Header;