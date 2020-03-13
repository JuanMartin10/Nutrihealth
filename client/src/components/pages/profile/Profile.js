import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import ProfileModal from './Modal/ProfileModal'
import Notifications from './Notifications/Notifications'
import Clients from './Clients/Clients'
import FavRecipesCard from './FavRecipesCard'

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    onClick = () => this.props.history.push('/my-menu')


    render() {
        console.log(this.props)
        return (
            <>
                <Container>
                    {this.props.loggedInUser.role === 'user' ? (
                        <Row>
                            <Col md={7}>
                                <h1>Hola, {this.props.loggedInUser.username}</h1>

                                <h4>Puedes ver tu menú semanal desde aquí</h4>
                                <Button className="greenButton mb-5" as="div" variant="light" size="sm" onClick={() => this.onClick()}>
                                    Consulta tu menú semanal
                                </Button>

                                {this.props.loggedInUser.recipes.length != 0 ?
                                    (
                                        <>
                                            <h4 className="mt-5">Estas son tus recetas favoritas:</h4>
                                            <Row>
                                                {this.props.loggedInUser.recipes.map(elm => <FavRecipesCard key={elm} {...elm} />
                                                )}
                                            </Row>
                                        </>
                                    )
                                    :
                                    <p>No tienes ninguna notificación por ahora</p>
                                }
                            </Col>

                            <Col md={5}>
                                <div className="ml-5 pt-5">
                                    {this.props.loggedInUser.userfile ? (
                                        <div>
                                            <p> Esta es tu altura: {this.props.loggedInUser.userfile.height} cm</p>
                                            <p> Este es tu peso: {this.props.loggedInUser.userfile.weight} kg</p>
                                            <p> Este es tu edad: {this.props.loggedInUser.userfile.age} años</p>
                                            <p> Este es tu nivel de actividad: {this.props.loggedInUser.userfile.activitylevel}</p>
                                            <p> Tu objetivo: {this.props.loggedInUser.userfile.goal}</p>
                                            <p> Vives en: {this.props.loggedInUser.userfile.city}</p>
                                            <p> Intolerancias: {this.props.loggedInUser.userfile.intolerances}</p>
                                            <p> Preferencias alimenticias: {this.props.loggedInUser.userfile.foodPreferences}</p>
                                            <ProfileModal loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                                        </div>
                                    )
                                        :
                                        <div>
                                            <p>Tus preferencias van aqui, introducelas</p>
                                            <ProfileModal loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                                        </div>
                                    }

                                </div>


                            </Col>
                        </Row>
                    )
                        :
                        <><h1>Hola {this.props.loggedInUser.username}</h1>
                            <Row>

                                <Col md={6}>
                                    <Notifications loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                                </Col>


                                <Col md={6}>

                                    <Clients loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />

                                </Col>
                            </Row>
                        </>
                    }
                </Container>
            </>
        )


    }
}

export default Profile
