import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthServices from '../../services/auth.services'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.services = new AuthServices()
    }

    logout = () => {
        this.services.logout()
            .then(response => {
                console.log(response)
                alert("SESION CERRADA")
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">CoastersApp!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as="div"> <Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                        <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                        <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation