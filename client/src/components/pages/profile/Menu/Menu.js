import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'
import SendToBack from '../../../../services/sendtoback.services'

import Table from 'react-bootstrap/Table'
import TableMenu from './TableMenu'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.sendtoback = new SendToBack()
    }


    render() {


        return (
            <Container>
                <h1>Este es tu menú de ésta semana</h1>
                <h4>Aprobado por: {this.props.loggedInUser.userfile.nutricionist.username}</h4>
                <TableMenu loggedInUser={this.props.loggedInUser} />

            </Container >
        )
    }
}

export default Menu