import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import AuthServices from '../../../../services/auth.services'

import { Link } from 'react-router-dom'

class PreSignup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            role: '',
        }
        this.services = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postUser = () => {
        this.services.signup(this.state)
            .then(response => {
                this.setState({ username: '', password: '' })
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

                    <Button variant="dark" type="submit"><Link to="/signup">Register as Nutricionist</Link></Button>
                    <br></br><br></br>
                    <Button variant="dark" type="submit"><Link to="/signup">Register as User</Link></Button>

                </Form>
            </Container>
        )


    }
}

export default PreSignup