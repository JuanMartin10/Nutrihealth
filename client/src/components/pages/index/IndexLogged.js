import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'




class IndexLogged extends Component {
    constructor(props) {
        super(props)
    }

    onClick = () => this.props.history.push('/search-nutri')
    onClick2 = () => this.props.history.push('/my-menu')



    render() {

        return (
            <Container className="bgImage">
                <h1>Hola, {this.props.loggedInUser.username}</h1>
                <Row>

                    {this.props.loggedInUser.role == 'user' ?
                        (
                            <>
                                <Col>
                                    {/*  AQUI TENDRIA QUE HABER UN IF DE SI YA TIENES NUTRICIONISTA MUESTRAS EL Menu */}

                                    <p>Puedes acceder a los nutricionistas disponibles desde aquí:</p>

                                    <Button className="greenButton" as="div" variant="light" size="sm" onClick={() => this.onClick()}>
                                        Encuentra tu nutricionista
                                    </Button>

                                </Col>
                                <Col>
                                    <p>Puedes ver tu menú semanal desde aquí</p>
                                    <Button className="greenButton" as="div" variant="light" size="sm" onClick={() => this.onClick2()}>
                                        Consulta tu menú semanal
                                    </Button>
                                </Col>
                            </>
                        )
                        :
                        (
                            <p>Revisa en tu perfil si tienes nuevas notificaciones</p>
                        )
                    }


                </Row>
            </Container>
        )
    }



}

export default IndexLogged  
