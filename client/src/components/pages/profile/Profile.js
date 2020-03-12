import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import ProfileModal from './Modal/ProfileModal'
import Notifications from './Notifications/Notifications'
import Clients from './Clients/Clients'


class Profile extends Component {
    constructor(props) {
        super(props)
    }

    onClick = () => this.props.history.push('/search-nutri')


    render() {
        console.log(this.props)
        return (
            <>
                <Container>
                    {this.props.loggedInUser.role === 'user' ? (
                        <Row>
                            <Col className="d-flex align-items-start" md={7}>
                                <h1>Hola, {this.props.loggedInUser.username}</h1>

                                <p>Puedes ver tu menú semanal desde aquí</p>
                                <Button className="greenButton" as="div" variant="light" size="sm" onClick={() => this.onClick2()}>
                                    Consulta tu menú semanal
                                    </Button>
                            </Col>
                            <Col className="d-flex align-items-center" md={5}>
                                <div>
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
