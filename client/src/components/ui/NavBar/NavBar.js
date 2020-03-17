import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'
import AuthServices from '../../../services/auth.services'
import { Link } from 'react-router-dom'


class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmodal: false,
        }
        this.authservices = new AuthServices()
    }

    logout = () => {
        this.authservices.logout()
            .then(response => this.props.setTheUser(false))
            .catch(err => console.log(err))
    }

    render() {

        const greeting = this.props.loggedInUser ? <>Hola, {this.props.loggedInUser.username}</> : <>Hola, invitad@</>

        return (
            <div>

                {this.props.loggedInUser ?
                    (
                        <Navbar className="navigation" bg="light" expand="lg" variant="light">
                            <Navbar.Brand as="div"> <Link to="/"><img className="logo" src='https://res.cloudinary.com/dkbpijai0/image/upload/v1584048189/Nutrihealth2_mnfafx.png' alt="logo"></img></Link></Navbar.Brand>
                            <Nav activeKey="/recipes">
                                <Nav.Item>
                                    <Nav.Link as="div"><Link to="/recipes">Buscador de recetas</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link as="div"> <Link to="/profile">Perfil</Link></Nav.Link>
                                    <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
                                    <Nav.Link as="small">{greeting}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    )
                    :
                    (
                        <Navbar className="navigation" bg="light" expand="lg" variant="light">
                            <Navbar.Brand as="div"> <Link to="/"><img className="logo" src='https://res.cloudinary.com/dkbpijai0/image/upload/v1584048189/Nutrihealth2_mnfafx.png' alt="logo"></img></Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav.Link as="div"><Link to="/recipes">Buscador de recetas</Link></Nav.Link>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                                    <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                                    <Nav.Link as="small">{greeting}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    )}
            </div>
        )
    }
}

export default Navigation