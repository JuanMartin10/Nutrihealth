import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class IndexLogged extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <h1>Hola, {this.props.loggedInUser.username}</h1>
                <Row>
                    <Col>
                        <p>Puedes acceder a los nutricionistas disponibles desde aquí:</p>

                        <Link to="/search-nutri">Encuentra tu nutricionista</Link>


                    </Col>
                    <Col>
                        <p>Puedes ver tu menú semanal desde aquí</p>
                    </Col>
                </Row>
            </Container>
        )
    }



}

export default IndexLogged  
