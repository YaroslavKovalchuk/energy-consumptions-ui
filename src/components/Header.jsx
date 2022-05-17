import React from 'react'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import logo from '../pages/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import PrivateRouter from './PrivateRouter';


const Header = (props) => {

    const handleSingOut = () => {
        props.handleSingOut();
    }

    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='main-header'>
                    <div className='header-barnd'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='btn-navbar-toggle' />
                        <img src={logo} alt="logo" className="header-logo" />
                        <h5 className="header-site-name text-center">Система обліку та моніторингу виробинцтва </h5>
                    </div>
                    <div className="header-navbar">
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Container>
                                <Nav className='mr-auto nav'>
                                    <NavLink as={Link} to="/main">Головна</NavLink>
                                    <NavLink as={Link} to="/temp">Температури</NavLink>
                                    <NavLink as={Link} to="/counters">Облік показників</NavLink>
                                    <NavLink as={Link} to="/errors">Список аварій</NavLink>
                                    <NavLink as={Link} to="/resource">Ресурс обладання</NavLink>
                                    <Button onClick={handleSingOut} className="btn btn-light btn-sing-out">
                                        <FontAwesomeIcon icon={faRightToBracket} className='fa-1x' />  Вихід
                                    </Button>
                                </Nav>
                            </Container>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <PrivateRouter />
            </Router>
        </>
    )
}


export default Header;