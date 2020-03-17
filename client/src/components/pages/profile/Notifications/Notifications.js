import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'
import NotificationsCard from './NotificationsCard'

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: '',
        }
        this.adminservices = new AdminServices()
    }


    confirmNutri = (notifId) => {
        this.adminservices.confirmNutri(notifId)
            .then(respuesta => this.props.setTheUser(respuesta))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <>
                    <h2>Tus notificaciones</h2>
                    {this.props.loggedInUser.notifications.length !== 0 ?
                        (
                            <Row>
                                <br></br>
                                {this.props.loggedInUser.notifications.map(elm => <NotificationsCard key={elm._id} {...elm} confirmNutri={this.confirmNutri} />
                                )}
                            </Row>
                        )
                        :
                        <p>No tienes ninguna notificación por ahora</p>
                    }
                </>
            </Container >
        )
    }
}

export default Notifications