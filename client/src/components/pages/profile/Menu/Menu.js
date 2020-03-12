import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'
import SendToBack from '../../../../services/sendtoback.services'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        // this.adminservices = new AdminServices()
        this.sendtoback = new SendToBack()
    }


    // componentDidMount = () => this.getMenu()

    // getMenu = () => {
    //     this.sendtoback.getMenu()
    // }

    // confirmNutri = (notifId) => {
    //     this.adminservices.confirmNutri(notifId)
    //         .then(respuesta => this.props.setTheUser(respuesta))
    //         .catch(err => console.log(err))
    // }

    render() {

        console.log(this.props.loggedInUser.menu.menu)
        return (
            <Container>
                Tu menuu
            </Container >
        )
    }
}

export default Menu