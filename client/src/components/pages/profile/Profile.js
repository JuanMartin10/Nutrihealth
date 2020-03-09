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
            userPreferences: {
                height: '',
                weight: '',
                age: '',
                activitylevel: '',
                goal: '',
                city: '',
                intolerances: '',
                foodPreferences: '',
            }
        }
        this.sendtobackservices = new SendToBack()

    }


    componentDidMount = () => this.getPreferencesUser()

    getPreferencesUser = () => {
        this.sendtobackservices.getPreferencesUser(this.props.loggedInUser.userfile)
            .then(userPreferences => {
                // userPreferences.intolerances = userPreferences.intolerances.join().replace(',', ", ");
                // userPreferences.foodPreferences = userPreferences.foodPreferences.join().replace(',', ", ");
                this.setState({ userPreferences })
            })
            .catch(err => console.log(err))
    }

    render() {

        const { userPreferences } = this.state;
        console.log(userPreferences);
        const { height, weight, age, activitylevel, goal, city, intolerances, foodPreferences } = userPreferences;

        return (
            <>
                <Container>
                    <Row>
                        <Col md={8}>
                            <h1>Hola, {this.props.loggedInUser.username}</h1>
                        </Col>
                        <Col md={4}>
                            <p> Esta es tu altura: {height} cm</p>
                            <p> Este es tu peso: {weight} kg</p>
                            <p> Este es tu edad: {age} años</p>
                            <p> Este es tu nivel de actividad: {activitylevel}</p>
                            <p> Tu objetivo: {goal}</p>
                            <p> Vives en: {city}</p>
                            <p> Intolerancias: {intolerances}</p>
                            <p> Preferencias alimenticias: {foodPreferences}</p>

                            <ProfileModal getPreferencesUser={this.getPreferencesUser} userPreferences={userPreferences} />
                        </Col>
                    </Row>
                </Container>
            </>
        )


    }
}

export default Profile
