import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
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
    
    componentDidMount() {
        this.getNotifications()
    }


    getNotifications() {
        // recibir del back las notificaciones que estén creadas en el usuario
        this.adminservices.getNotifications()
        .then(allNotifications => {
            console.log(allNotifications)
            this.setState({notifications: allNotifications})})
        .catch(err => console.log(err))
    }


    confirmNutri = (notifId) => {
        console.log(notifId)
        this.adminservices.confirmNutri(notifId)
        .then(x => console.log(x))
        .catch(err => console.log(err))
    }

    render() {
        // console.log(this.props.loggedInUser.userfile)
        return (
            <Container>

                <h1>Hola {this.props.loggedInUser.username}</h1>

                    Estos son los notificaciones que tienes:
    

                    {this.state.notifications.length ?
                    (
                        <Row>
                            {this.state.notifications.map(elm => <NotificationsCard key={elm._id} {...elm} confirmNutri={this.confirmNutri}/>)}
                        </Row>
                            )
                  :
                <p>CARGANDO Notificaciones</p>
                }

            </Container>
        )
    }
}

export default Notifications