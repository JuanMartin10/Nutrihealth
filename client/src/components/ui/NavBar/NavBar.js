import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Modal from 'react-bootstrap/Modal'

import NavBar from './NavBar.css'

import AuthServices from '../../../services/auth.services'
import { Link } from 'react-router-dom'
// import PreSignup from '../../pages/auth/signup/PreSignup'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmodal: false,
        }
        this.authservices = new AuthServices()
    }

    logout = () => {
        this.services.logout()
            .then(response => {
                this.props.setTheUser(false)
            })
            .catch(err => console.log(err))
    }

    // openModal = () => {
    //     this.setState({
    //         showmodal: true
    //     })
    // }
    // closeModal = () => {
    //     this.setState({
    //         showmodal: false
    //     })
    // }

    render() {
        const greeting = this.props.loggedInUser ? <>Hola, {this.props.loggedInUser.username}</> : <>Hola, invitad@</>

        return (
            <div>
                {/* <Modal size="lg" show={this.state.showmodal} onHide={this.closeModal} >
                    <Modal.Body>
                        <PreSignup closeModal={this.closeModal} />
                    </Modal.Body>
                </Modal> */}

                {this.props.loggedInUser ?
                    (
                        <Navbar className="navigation" bg="light" expand="lg" variant="light">
                            <Navbar.Brand as="div"> <Link to="/">NutriHealth</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="justify-content-center" activeKey="/recipes">
                                <Nav.Item>
                                    <Nav.Link as="div"><Link to="/recipes">Buscador de recetas</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
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
                            <Navbar.Brand as="div"> <Link to="/">NutriHealth</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="justify-content-center" activeKey="/recipes">
                                <Nav.Item>
                                    <Nav.Link as="div"><Link to="/recipes">Buscador de recetas</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                                    <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                                    {/* <Nav.Link as="div"><Link as="a" onClick={this.openModal} > Registro</Link></Nav.Link> */}
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