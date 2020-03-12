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
        }
    }

    // props de logedinuser



    render() {
        console.log(this.props.loggedInUser)

        return (
            <Container>

                <h1>Hola {this.props.loggedInUser.username}</h1>

                <p> Estos son los clientes que tienes:</p>

                {this.props.loggedInUser.pacients.length != 0 ?
                    (
                        <Row>
                            {this.props.loggedInUser.pacients.map(elm => <ClientsCards key={elm._id} {...elm} />)}
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