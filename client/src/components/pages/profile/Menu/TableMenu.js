import React, { Component } from 'react';

import Table from 'react-bootstrap/Table'

class TableMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }


    }
    render() {
        console.log(this.props)
        console.log(this.props.loggedInUser.userfile.nutricionist.username)
        console.log(this.props.loggedInUser.menu)
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
                        <td>{menu.monday.breakfast}</td>
                        <td>{menu.monday.launch}</td>
                        <td>{menu.monday.dinner}</td>
                    </tr>
                    <tr>
                        <td>Martes</td>
                        <td>{menu.tuesday.breakfast}</td>
                        <td>{menu.tuesday.launch}</td>
                        <td>{menu.tuesday.dinner}</td>
                    </tr>
                    <tr>
                        <td>Miercoles</td>
                        <td>{menu.wednesday.breakfast}</td>
                        <td>{menu.wednesday.launch}</td>
                        <td>{menu.wednesday.dinner}</td>
                    </tr>
                    <tr>
                        <td>Jueves</td>
                        <td>{menu.thursday.breakfast}</td>
                        <td>{menu.thursday.launch}</td>
                        <td>{menu.thursday.dinner}</td>
                    </tr>
                    <tr>
                        <td>Viernes</td>
                        <td>{menu.friday.breakfast}</td>
                        <td>{menu.friday.launch}</td>
                        <td>{menu.friday.dinner}</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>{menu.saturday.breakfast}</td>
                        <td>{menu.saturday.launch}</td>
                        <td>{menu.saturday.dinner}</td>
                    </tr>
                    <tr>
                        <td>Domingo</td>
                        <td>{menu.sunday.breakfast}</td>
                        <td>{menu.sunday.launch}</td>
                        <td>{menu.sunday.dinner}</td>
                    </tr>



                </tbody>
            </Table>
        )
    }
}
export default TableMenu