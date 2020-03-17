import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import SendToBack from '../../../../services/sendtoback.services'


class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userPreferences: {
                height: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.height : "",
                weight: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.weight : "",
                age: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.age : '',
                activitylevel: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.activitylevel : '',
                goal: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.goal : '',
                city: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.city : '',
                intolerances: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.intolerances : '',
                foodPreferences: this.props.loggedInUser.userfile ? this.props.loggedInUser.userfile.foodPreferences : '',
            }
        }
        this.sendtobackservices = new SendToBack()
    }

    finishAction = () => this.props.closeModal()


    preferencesUser = (preferences) => {
        this.sendtobackservices.preferencesUser(preferences)
            .then(userUpdated => this.props.setTheUser(userUpdated))
            .catch(err => console.log(err))
    }

    handleSubmit = async e => {
        e.preventDefault()
        await this.preferencesUser(this.state.userPreferences);
        this.finishAction()
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            userPreferences: {
                ...this.state.userPreferences,
                [name]: value
            }
        })
    }

    render() {

        const { height, weight, age, activitylevel, goal, city, intolerances, foodPreferences } = this.state.userPreferences;


        return (
            <>
                <Container>
                    <Form.Row>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group>
                                <Form.Label>Tu altura</Form.Label>
                                <Form.Control type="number" name="height" placeholder="Escribe tu altura en cm" value={height} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu peso</Form.Label>
                                <Form.Control type="number" name="weight" placeholder="Tu peso" value={weight} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu edad</Form.Label>
                                <Form.Control type="number" name="age" placeholder="Tu edad" value={age} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tu nivel de actividad</Form.Label>
                                <Form.Control as="select" name="activitylevel" value={activitylevel} onChange={this.handleChange} required>
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
                                <Form.Control as="select" name="goal" value={goal} onChange={this.handleChange} required>
                                    <option></option>
                                    <option>Perder peso</option>
                                    <option>Mantener peso</option>
                                    <option>Ganar peso</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" name="city" placeholder="Tu ciudad" value={city} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Intolerancias alimenticias</Form.Label>
                                <Form.Control as="textarea" rows="3" name="intolerances" placeholder="Tus intolerancias alimentarias, separadas por comas" value={intolerances} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Preferencias alimentarias</Form.Label>
                                <Form.Control as="textarea" rows="3" name="foodPreferences" placeholder="Tus preferencias alimentarias, separadas por comas" value={foodPreferences} onChange={this.handleChange} required />
                            </Form.Group>

                            <Button className="greenButton" variant="light" type="submit">Guardar preferencias</Button>
                            <br></br>
                        </Form >
                    </Form.Row>
                </Container>
            </>
        )


    }
}

export default ProfileForm