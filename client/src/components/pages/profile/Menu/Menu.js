import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'


class Menu extends Component {
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
                Tu menuu
            </Container >
        )
    }
}

export default Menu