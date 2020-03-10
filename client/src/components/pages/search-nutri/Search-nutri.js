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
    constructor(props) {
        super(props)
        this.state = {
            adminuser: '',
        }
        this.adminservices = new AdminServices()
        console.log(this.adminservices)

    }

    componentDidMount() {
        this.getAdminUsers()
    }

    getAdminUsers() {
        this.adminservices.getAdminUsers()
            .then(allAdminUsers => this.setState({ adminuser: allAdminUsers }))
            .catch(err => console.log(err))
    }

    // onClick(isAdmin){
    //     this.chooseAdmin(isAdmin)
    // }

    chooseAdmin = (admin) => {
        // console.log(this)
        // console.log(this.adminservices)
        //Envia al back la información del usuario logeado y el usuario elegido
        // console.log(admin)
        this.adminservices.chooseAdmin(admin)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        
        
    }

    render() {

        return (

            < Container >
                    Estos son los nutricionistas asociados:
    

                    {this.state.adminuser.length ?
                    (
                        <Row>
                            {this.state.adminuser.map(elm => <NutriCards key={elm._id} {...elm} chooseAdmin={this.chooseAdmin}/>)}
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