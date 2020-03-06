import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import RecipeServices from '../../../services/sendrecipes.services'


class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '',
            weight: '',
            age: '',
            activitylevel: '',
            goal: '',
            city: '',
            intolerances: '',
            preferences: '',
        }
        this.recipeservices = new RecipeServices()

    }

    preferencesUser = (preferences) => {
        console.log(preferences)
        console.log(this.recipeservices)
        this.recipeservices.preferencesUser(preferences)
            .then(allPreferences => {
                console.log(allPreferences)
                this.setState({ allPreferences })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.preferencesUser(this.state)
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState(
            { ...this.state, [name]: value }
        )
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Soy el perfil de: {this.props.loggedInUser.username}</h1>
                    <Form.Row>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group>
                                <Form.Label>Tu altura</Form.Label>
                                <Form.Control type="number" name="height" placeholder="Escribe tu altura en cm" value={this.state.height} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu peso</Form.Label>
                                <Form.Control type="number" name="weight" placeholder="Tu peso" value={this.state.weight} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu edad</Form.Label>
                                <Form.Control type="number" name="age" placeholder="Tu edad" value={this.state.age} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu nivel de actividad</Form.Label>
                                <Form.Control as="select" name="activitylevel" value={this.state.activitylevel} onChange={this.handleChange}>
                                    <option></option>
                                    <option>Deportista profesional</option>
                                    <option>Alto</option>
                                    <option>Medio</option>
                                    <option>Bajo</option>
                                    <option>Sedentario</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu objetivo</Form.Label>
                                <Form.Control as="select" name="goal" value={this.state.goal} onChange={this.handleChange} >
                                    <option></option>
                                    <option>Bajar peso</option>
                                    <option>Mantener peso</option>
                                    <option>Ganar peso</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" name="city" placeholder="Tu ciudad" value={this.state.city} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Intolerancias alimenticias</Form.Label>
                                <Form.Control as="textarea" rows="3" name="intolerances" placeholder="Tus intolerancias alimentarias, separadas por comas" value={this.state.intolerances} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Preferencias alimentarias</Form.Label>
                                <Form.Control as="textarea" rows="3" name="preferences" placeholder="Tus preferencias alimentarias, separadas por comas" value={this.state.preferences} onChange={this.handleChange} />
                            </Form.Group>

                            <Button variant="dark" type="submit">Guardar preferencias</Button>
                            <br></br>
                        </Form >
                    </Form.Row>
                </Container>
            </>
        )


    }
}

export default ProfileForm