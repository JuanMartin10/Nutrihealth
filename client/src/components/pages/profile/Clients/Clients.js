import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'
import ClientsCards from './ClientsCards'
import Spinner from 'react-bootstrap/Spinner'



class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: '',
        }
        this.adminservices = new AdminServices()
    }

    componentDidMount() {
        this.getClients()
    }


    getClients() {
        // recibir del back las notificaciones que estén creadas en el usuario
        this.adminservices.getClients()
            .then(allClients => {
                console.log(allClients.pacients)
                this.setState({ clients: allClients.pacients })
            })
            .catch(err => console.log(err))
    }


    // confirmNutri = (notifId) => {
    //     console.log(notifId)
    //     this.adminservices.confirmNutri(notifId)
    //         // segun venga la info del back:
    //         // eliminar del state de notifications 
    //         // incorporar en clients
    //         .then(x => console.log(x))
    //         .catch(err => console.log(err))
    // }

    render() {
        // console.log(this.props.loggedInUser.userfile)
        return (
            <Container>

                {/* <h1>Hola {this.props.loggedInUser.username}</h1> */}

                <p> Estos son los clientes que tienes:</p>


                {this.state.clients.length ?
                    (
                        <Row>
                            {this.state.clients.map(elm => <ClientsCards key={elm._id} {...elm} getClients={this.getClients} />)}
                        </Row>
                    )
                    :
                    <Spinner animation="border" />

                }

            </Container>
        )
    }
}

export default Clients