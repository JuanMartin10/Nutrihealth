import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import AuthServices from '../../../../services/auth.services'
import { Link } from 'react-router-dom'

class PreSignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            role: '',
        }
        this.services = new AuthServices()
    }
    finishAction = () => this.props.closeModal()

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postUser = () => {
        this.services.signup(this.state)
            .then(response => {
                this.setState({ username: '', password: '' })
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()
    }



    submitRole = (rolsubmited) => {
        this.setState({
            role: rolsubmited
        }, () => this.finishAction())
    }



    // componentDidMount = () => {
    //     this.state.role === 'admin' ? this.roleAdmin() : this.roleUser()
    // }

    compon
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>

                    <Row className="justify-content-md-center">
                        <Col m={6} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>SOY PROFESIONAL</Card.Title>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Text>Dietistas, nutricionistas, centros dietéticos</Card.Text>
                                    <Button onClick={() => this.submitRole("admin")} variant="light" type="submit"><Link to="/signup">Register as Nutricionist</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col m={6} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>SOY USUARIO</Card.Title>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Text>Usuarios </Card.Text>
                                    <Button onClick={() => this.submitRole("user")} variant="light" type="submit"><Link to="/signup">Register as User</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </Container >
        )


    }
}

export default PreSignup