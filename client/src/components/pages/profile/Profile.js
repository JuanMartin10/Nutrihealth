import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import ProfileModal from './Modal/ProfileModal'
import SendToBack from '../../../services/sendtoback.services'



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '',
            weight: '',
            age: '',
            activitylevel: '',
            goal: '',
            city: '',
            intolerances: '',
            preferences: '',
        }
        this.sendtobackservices = new SendToBack()

    }


    componentDidMount = () => this.getPreferencesUser()

    getPreferencesUser = () => {
        this.sendtobackservices.getPreferencesUser(this.props.loggedInUser.userfile)
            .then(elm => this.setState(elm))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Container>
                    <Row>
                        <Col md={8}>
                            <h1>Hola, {this.props.loggedInUser.username}</h1>
                        </Col>
                        <Col md={4}>
                            <p> Esta es tu altura: {this.state.height} cm</p>
                            <p> Este es tu peso: {this.state.weight} kg</p>
                            <p> Este es tu edad: {this.state.age} años</p>
                            <p> Este es tu nivel de actividad: {this.state.activitylevel}</p>
                            <p> Tu objetivo: {this.state.goal}</p>
                            <p> Vives en: {this.state.city}</p>
                            <p> Intolerancias: {this.state.intolerances}</p>
                            <p> Preferencias alimenticias: {this.state.preferences}</p>
                            <ProfileModal />
                        </Col>
                    </Row>
                </Container>
            </>
        )


    }
}

export default Profile
