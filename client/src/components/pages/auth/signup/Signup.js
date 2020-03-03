import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import AuthServices from '../../../../services/auth.services'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                username: '',
                password: '',
                email: '',

            },
            role: false,
        }
        this.services = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target
        // console.log(e.target.checked)

        // if (name === 'role') value = checked
        // console.log(e.target.checked)
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [name]: value,
            },
            role: e.target.checked
        })
    }

    postUser = () => {

        this.services.signup(this.state)
            .then(response => {
                this.setState({
                    user: {
                        username: '',
                        password: '',
                        email: '',
                    },
                    role: false

                }, this.props.setTheUser(response))
                console.log('USUARIO CREADO', response)
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()
    }

    render() {

        return (
            <Container>
                <h1>Registro de usuarios</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.user.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.user.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.user.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Soy nutricionista" onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">Registrarse</Button>
                </Form>
            </Container>
        )


    }
}

export default Signup