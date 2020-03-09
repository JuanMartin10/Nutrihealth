import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import AdminServices from '../../../services/admin.services'
// import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Spinner from 'react-bootstrap/Spinner'



class SearchNutri extends Component {
    constructor() {
        super()
        this.state = {


        }
        this.adminservices = new AdminServices()

    }

    render() {
        return (
            <Container>
                Estos son los nutricionistas asociados:

            </Container >
        )
    }
}
export default SearchNutri  