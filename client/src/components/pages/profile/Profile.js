import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import ProfileModal from './Modal/ProfileModal'
import Notifications from './Notifications/Notifications'
import Clients from './Clients/Clients'
import FavRecipesCard from './FavRecipesCard'
import TablePreferences from './TablePreferences'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    onClick = () => this.props.history.push('/my-menu')


    render() {
        return (
            <>
                <Container>
                    {this.props.loggedInUser.role === 'user' ? (
                        <Row>
                            <Col md={7}>
                                <h1>Hola, {this.props.loggedInUser.username}</h1>

                                <h4>Puedes ver tu menú semanal desde aquí</h4>

                                <Link className="greenButton mb-5 p-2 d-flex justify-content-center" to="/my-menu">Consulta tu menu semanal</Link>

                                {this.props.loggedInUser.recipes.length !== 0 ?
                                    (
                                        <div className="bgGrey">
                                            <h4 className="mt-5">Estas son tus recetas favoritas:</h4>
                                            <Row>
                                                {this.props.loggedInUser.recipes.map(elm => <FavRecipesCard key={elm} {...elm} setTheUser={this.props.setTheUser} />
                                                )}
                                            </Row>
                                        </div>
                                    )
                                    :
                                    <p>No tienes ninguna notificación por ahora</p>
                                }

                            </Col>

                            <Col md={5}>
                                <div className="ml-5 pt-5">
                                    {this.props.loggedInUser.userfile ? (
                                        <div>
                                            <TablePreferences loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
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
