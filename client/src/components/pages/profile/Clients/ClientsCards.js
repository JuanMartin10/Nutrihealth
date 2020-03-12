import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import MenuModal from '../Modal/MenuModal'
class ClientsCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    onClick = () => { }

    render() {
        console.log(this.props)
        return (
            < Col md={6}>
                <Card className="card-rusa">
                    {/* <Card.Img variant="top" src={imageUrl} /> */}
                    <Card.Body>
                        <Card.Title>{this.props.username}</Card.Title>
                        <hr></hr>
                        {this.props.userfile ?
                            (
                                <>
                                    <p>Edad: {this.props.userfile.age}</p>
                                    <p>Altura: {this.props.userfile.height}</p>
                                    <p>Peso: {this.props.userfile.weight}</p>
                                    <p>Nivel de actividad: {this.props.userfile.activitylevel}</p>
                                    <p>Objetivo: {this.props.userfile.goal}</p>
                                    <p>Ciudad: {this.props.userfile.city}</p>
                                    <p>Intolerancias: {this.props.userfile.intolerances}</p>
                                    <p>Preferencias de comida: {this.props.userfile.foodPreferences}</p>
                                </>
                            )
                            :
                            <p>El usuario aun no ha registrado sus preferencias</p>
                        }

                        <MenuModal loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} clientId={this.props._id} />

                    </Card.Body>
                </Card>
                <br></br>
            </Col >

        )
    }
}

export default ClientsCards