import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AuthServices from '../../../../services/auth.services'

class Signup extends Component {
    constructor(props) {
        super(props)
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
                    role: false,
                }, this.props.setTheUser(response))
                this.props.history.push('/profile')
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
                <br></br>

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

                    <Button className="greenButton" variant="light" type="submit">Registrarse</Button>
                </Form>
            </Container>
        )


    }
}

export default Signup