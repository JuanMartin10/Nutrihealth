import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import SendToBack from '../../../../services/sendtoback.services'


class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            deilyMenu: {
                monday: '',
                tuesday: '',
                wednesday: '',
                thursday: '',
                friday: '',
                saturday: '',
                sunday: '',
            }

        }
        this.sendtobackservices = new SendToBack()

    }

    finishAction = () => this.props.closeModal()


    sendMenu = (deilyMeals, clientId) => {
        this.sendtobackservices.sendMenu(deilyMeals, clientId)
            .then(() => alert('Se ha enviado tu menú'))
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.sendMenu(this.state.deilyMenu, this.props.clientId);
        this.finishAction()
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            deilyMenu: {
                ...this.state.deilyMenu,
                [name]: value
            }
        })
    }

    render() {

        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state.deilyMenu;
        console.log(this.props.clientId)

        return (
            <>
                <Container>

                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group>
                            <Form.Label>Lunes</Form.Label>
                            <Form.Control as="textarea" rows="3" name="monday" placeholder="Introduce el menú del lunes" value={monday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Martes</Form.Label>
                            <Form.Control as="textarea" rows="3" name="tuesday" placeholder="Introduce el menú del tuesday" value={tuesday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Miercoles</Form.Label>
                            <Form.Control as="textarea" rows="3" name="wednesday" placeholder="Introduce el menú del miercoles" value={wednesday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Jueves</Form.Label>
                            <Form.Control as="textarea" rows="3" name="thursday" placeholder="Introduce el menú del jueves" value={thursday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Viernes</Form.Label>
                            <Form.Control as="textarea" rows="3" name="friday" placeholder="Introduce el menú del viernes" value={friday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sabado</Form.Label>
                            <Form.Control as="textarea" rows="3" name="saturday" placeholder="Introduce el menú del sabado" value={saturday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Domingo</Form.Label>
                            <Form.Control as="textarea" rows="3" name="sunday" placeholder="Introduce el menú del domingo" value={sunday} onChange={this.handleChange} required />
                        </Form.Group>
                        <Button className="greenButton" variant="light" type="submit">Enviar preferencias</Button>
                        <br></br>
                    </Form >

                </Container>
            </>
        )


    }
}

export default ProfileForm