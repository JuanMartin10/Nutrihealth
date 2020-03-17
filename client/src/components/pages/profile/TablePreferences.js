import React, { Component } from 'react';

import Table from 'react-bootstrap/Table'

class TablePreferences extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {

        const userfile = this.props.loggedInUser.userfile

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Caracteristicas</th>
                        <th>Valor</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Altura</td>
                        <td>{userfile.height}</td>

                    </tr>
                    <tr>
                        <td>Peso</td>
                        <td>{userfile.weight}</td>
                    </tr>
                    <tr>
                        <td>Edad</td>
                        <td>{userfile.age}</td>
                    </tr>
                    <tr>
                        <td>Nivel de actividad</td>
                        <td>{userfile.activitylevel}</td>
                    </tr>
                    <tr>
                        <td>Objetivo</td>
                        <td>{userfile.goal}</td>
                    </tr>
                    <tr>
                        <td>Ciudad</td>
                        <td>{userfile.city}</td>
                    </tr>
                    <tr>
                        <td>Edad</td>
                        <td>{userfile.age}</td>
                    </tr>
                    <tr>
                        <td>Intolerancias</td>
                        <td>{userfile.intolerances}</td>
                    </tr> <tr>
                        <td>Comida preferida</td>
                        <td>{userfile.foodPreferences}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
export default TablePreferences