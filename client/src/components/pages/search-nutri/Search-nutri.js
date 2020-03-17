import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import AdminServices from '../../../services/admin.services'
import Row from 'react-bootstrap/Row'
import NutriCards from './NutriCards'

class SearchNutri extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminuser: '',
        }
        this.adminservices = new AdminServices()
    }


    componentDidMount() {
        this.getAdminUsers()
    }


    getAdminUsers() {
        this.adminservices.getAdminUsers()
            .then(allAdminUsers => this.setState({ adminuser: allAdminUsers }))
            .catch(err => console.log(err))
    }


    chooseAdmin = (admin) => {
        this.adminservices.chooseAdmin(admin)
            .then(res => alert('Se ha seleccionado el nutricionista.'))
            .catch(err => console.log(err))
    }


    render() {

        return (
            < Container >
                {this.props.loggedInUser.userfile ?
                    (
                        <>
                            <h2>Este es tu nutricionista</h2>

                            <p>{this.props.loggedInUser.userfile.nutricionist.username}</p>
                        </>
                    )
                    :
                    (
                        <>
                            <p> Estos son los nutricionistas asociados:</p>

                            {
                                this.state.adminuser.length ?
                                    (
                                        <Row>
                                            {this.state.adminuser.map(elm => <NutriCards key={elm._id} {...elm} chooseAdmin={this.chooseAdmin} />)}
                                        </Row>
                                    )
                                    :
                                    <p>CARGANDO</p>
                            }
                        </>
                    )
                }
            </Container >

        )
    }
}
export default SearchNutri  