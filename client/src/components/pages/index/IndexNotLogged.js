import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Signup from '../auth/signup/Signup'
import Login from '../auth/login/Login'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


class IndexNotLogged extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <Container>
                <h1> Bienvenid@ a NutriHealth </h1>
                <Row>
                    <Col>
                        Fotazo
                </Col>
                    <Col>
                        <Tabs defaultActiveKey="home" id="noanim-tab-example">
                            <Tab eventKey="home" title="Inicia sesión">
                                <Login loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                            </Tab>
                            <Tab eventKey="profile" title="Registrate">
                                <Signup loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default IndexNotLogged