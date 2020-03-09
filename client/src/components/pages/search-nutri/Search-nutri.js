import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import AdminServices from '../../../services/admin.services'
import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Spinner from 'react-bootstrap/Spinner'
import NutriCards from './NutriCards'


class SearchNutri extends Component {
    constructor() {
        super()
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

    render() {
        console.log(this.state && this.state)
        return (

            < Container >
                    Estos son los nutricionistas asociados:
    

                    {this.state.adminuser.length ?
                    (
                        <Row>
                            {this.state.adminuser.map(elm => <NutriCards key={elm._id} {...elm} />)}
                        </Row>
                            )
                  :
                <p>CARGANDO</p>
                }

            </Container >

        )
    }
}
export default SearchNutri  