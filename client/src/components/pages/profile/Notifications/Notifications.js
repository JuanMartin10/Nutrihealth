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
        this.adminservices.getNotifications()
            .then(allNotifications => {
                this.setState({ notifications: allNotifications })
            })
            .catch(err => console.log(err))
    }


    confirmNutri = (notifId) => {
        // console.log(notifId)
        this.adminservices.confirmNutri(notifId)
            .then(() => this.getNotifications())
            .catch(err => console.log(err))
    }

    render() {
        // console.log(this.props.loggedInUser.userfile)
        return (
            <Container>
                <>
                    {this.state.notifications.length ?
                        (
                            <Row>
                                <p> Estos son los notificaciones que tienes:</p>
                                {this.state.notifications.map(elm => <NotificationsCard key={elm._id} {...elm} confirmNutri={this.confirmNutri} />)}
                            </Row>
                        )
                        :
                        <p>No tienes ninguna notificación por ahora</p>
                    }
                </>
            </Container>
        )
    }
}

export default Notifications