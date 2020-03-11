import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'




class IndexLogged extends Component {
    constructor(props) {
        super(props)
    }

    onClick() {
        this.props.history.push('/search-nutri')
    }

    render() {
        return (
            <Container>
                <h1>Hola, {this.props.loggedInUser.username}</h1>
                <Row>
                    <Col>
                        <p>Puedes acceder a los nutricionistas disponibles desde aquí:</p>

                        <Button as="div" variant="dark" size="sm" onClick={() => this.onClick()}>
                            Encuentra tu nutricionista
                        </Button>

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
