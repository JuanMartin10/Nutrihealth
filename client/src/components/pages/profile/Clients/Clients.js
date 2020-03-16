import React, { Component } from 'react';
// import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import ClientsCards from './ClientsCards'
import Spinner from 'react-bootstrap/Spinner'



class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        console.log(this.props)

        return (
            <Container>
                <h2>Tus clientes</h2>

                {this.props.loggedInUser.pacients.length !== 0 ?
                    (
                        <Row>
                            {this.props.loggedInUser.pacients.map(elm => <ClientsCards key={elm._id} {...elm} loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />)}
                        </Row>
                    )
                    :
                    <p>No tienes ningún cliente por ahora</p>


                }

            </Container>
        )
    }
}

export default Clients