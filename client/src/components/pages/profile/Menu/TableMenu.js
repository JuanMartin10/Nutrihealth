import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AdminServices from '../../../../services/admin.services'
import SendToBack from '../../../../services/sendtoback.services'

import Table from 'react-bootstrap/Table'

class TableMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }


    }
    render() {
        console.log(this.props.loggedInUser.userfile.nutricionist.username)
        console.log(this.props.loggedInUser.menu.menu)
        const menu = this.props.loggedInUser.menu.menu

        return (
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
        )
    }
}
export default TableMenu