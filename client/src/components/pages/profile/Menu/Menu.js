import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'
import SendToBack from '../../../../services/sendtoback.services'

import Table from 'react-bootstrap/Table'

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

        console.log(this.props.loggedInUser.userfile.nutricionist.username)

        const menu = this.props.loggedInUser.menu.menu
        return (
            <Container>
                <h1>Este es tu menú de ésta semana</h1>
                <h4>Aprobado por: {this.props.loggedInUser.userfile.nutricionist.username}</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Mañana</th>
                            <th>Tarde</th>
                            <th>Noche</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lunes</td>
                            <td>{menu.monday}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>


                    </tbody>
                </Table>

            </Container >
        )
    }
}

export default Menu