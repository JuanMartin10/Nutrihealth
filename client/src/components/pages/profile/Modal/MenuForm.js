import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import SendToBack from '../../../../services/sendtoback.services'


class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            menu: {

                monday: {
                    breakfast: '', launch: '', dinner: ''
                },
                tuesday: {
                    breakfast: '', launch: '', dinner: ''
                },
                wednesday: {
                    breakfast: '', launch: '', dinner: ''
                },
                thursday: {
                    breakfast: '', launch: '', dinner: ''
                },
                friday: {
                    breakfast: '', launch: '', dinner: ''
                },
                saturday: {
                    breakfast: '', launch: '', dinner: ''
                },
                sunday: {
                    breakfast: '', launch: '', dinner: ''
                },



                // monday: '',
                // tuesday: '',
                // wednesday: '',
                // thursday: '',
                // friday: '',
                // saturday: '',
                // sunday: '',
            }

        }
        this.sendtobackservices = new SendToBack()

    }

    finishAction = () => this.props.closeModal()


    sendMenu = (menu, clientId) => {
        this.sendtobackservices.sendMenu(menu, clientId)
            .then(() => alert('Se ha enviado tu menú'))
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.sendMenu(this.state.menu, this.props.clientId);
        this.finishAction()
    }

    handleChange = e => {
        let { name, value, dataset } = e.target
        let time = dataset.subname
        this.setState({
            menu: {
                ...this.state.menu,
                [name]: {
                    ...this.state.menu[name],
                    [time]: value
                }
            }
        })
    }

    render() {

        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state.menu;

        return (
            <>
                <Container>

                    <Form onSubmit={this.handleSubmit} >

                        <Form.Group>
                            <Form.Label>Lunes-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="monday" data-subname="breakfast" placeholder="Introduce el menú del lunes-desayuno" value={monday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lunes-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="monday" data-subname="launch" placeholder="Introduce el menú del lunes-comida" value={monday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lunes-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="monday" data-subname="dinner" placeholder="Introduce el menú del lunes-cena" value={monday.dinner} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Martes-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="tuesday" data-subname="breakfast" placeholder="Introduce el menú del martes-desayuno" value={tuesday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Martes-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="tuesday" data-subname="launch" placeholder="Introduce el menú del martes-comida" value={tuesday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Martes-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="tuesday" data-subname="dinner" placeholder="Introduce el menú del martes-cena" value={tuesday.dinner} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Miercoles-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="wednesday" data-subname="breakfast" placeholder="Introduce el menú del miercoles-desayuno" value={wednesday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Miercoles-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="wednesday" data-subname="launch" placeholder="Introduce el menú del miercoles-comida" value={wednesday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Miercoles-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="wednesday" data-subname="dinner" placeholder="Introduce el menú del miercoles-cena" value={wednesday.dinner} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Jueves-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="thursday" data-subname="breakfast" placeholder="Introduce el menú del jueves-desayuno" value={thursday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Jueves-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="thursday" data-subname="launch" placeholder="Introduce el menú del jueves-comida" value={thursday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Jueves-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="thursday" data-subname="dinner" placeholder="Introduce el menú del jueves-cena" value={thursday.dinner} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Viernes-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="friday" data-subname="breakfast" placeholder="Introduce el menú del viernes-desayuno" value={friday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Viernes-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="friday" data-subname="launch" placeholder="Introduce el menú del viernes-comida" value={friday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Viernes-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="friday" data-subname="dinner" placeholder="Introduce el menú del viernes-cena" value={friday.dinner} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sabado-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="saturday" data-subname="breakfast" placeholder="Introduce el menú del Sabado-desayuno" value={saturday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sabado-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="saturday" data-subname="launch" placeholder="Introduce el menú del Sabado-comida" value={saturday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sabado-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="saturday" data-subname="dinner" placeholder="Introduce el menú del Sabado-cena" value={saturday.dinner} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Domingo-Desayuno</Form.Label>
                            <Form.Control as="textarea" rows="3" name="sunday" data-subname="breakfast" placeholder="Introduce el menú del domingo-desayuno" value={sunday.breakfast} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Domingo-Comida</Form.Label>
                            <Form.Control as="textarea" rows="3" name="sunday" data-subname="launch" placeholder="Introduce el menú del domingo-comida" value={sunday.launch} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Domingo-Cena</Form.Label>
                            <Form.Control as="textarea" rows="3" name="sunday" data-subname="dinner" placeholder="Introduce el menú del domingo-cena" value={sunday.dinner} onChange={this.handleChange} required />
                        </Form.Group>




                        {/* <Form.Group>
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
                        </Form.Group> */}
                        <Button className="greenButton" variant="light" type="submit">Enviar preferencias</Button>
                        <br></br>
                    </Form >

                </Container>
            </>
        )


    }
}

export default ProfileForm