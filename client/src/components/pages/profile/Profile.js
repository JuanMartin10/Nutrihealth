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
        // this.state = {
        //     userPreferences: {
        //         height: '',
        //         weight: '',
        //         age: '',
        //         activitylevel: '',
        //         goal: '',
        //         city: '',
        //         intolerances: '',
        //         foodPreferences: '',
        //     },
        //     // showPreferences: null
        // }
        // this.sendtobackservices = new SendToBack()

    }


    // componentDidMount = () => this.getPreferencesUser()

    // getPreferencesUser = () => {
    //     this.sendtobackservices.getPreferencesUser(this.props.loggedInUser.userfile)
    //         .then(userPreferences => {
    //             console.log(userPreferences)
    //             // userPreferences.intolerances = userPreferences.intolerances.join().replace(',', ", ");
    //             // userPreferences.foodPreferences = userPreferences.foodPreferences.join().replace(',', ", ");
    //             userPreferences ? this.setState({ userPreferences, showPreferences: true }) : this.setState({ userPreferences, showPreferences: false })
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {


        console.log(this.props.loggedInUser)
        // this.props.loggedInUser.userfile ? const { height, weight, age, activitylevel, goal, city, intolerances, foodPreferences } = this.props.loggedInUser.userfile : null

        return (
            <>
                <Container>
                    <Row>
                        <Col md={7}>
                            <h1>Hola, {this.props.loggedInUser.username}</h1>
                        </Col>
                        <Col md={5}>
                            <div>
                                {/* {this.state.showPreferences ? (
                                    <div>
                                        <p> Esta es tu altura: {height} cm</p>
                                        <p> Este es tu peso: {weight} kg</p>
                                        <p> Este es tu edad: {age} años</p>
                                        <p> Este es tu nivel de actividad: {activitylevel}</p>
                                        <p> Tu objetivo: {goal}</p>
                                        <p> Vives en: {city}</p>
                                        <p> Intolerancias: {intolerances}</p>
                                        <p> Preferencias alimenticias: {foodPreferences}</p>
                                        <ProfileModal getPreferencesUser={this.getPreferencesUser} userPreferences={this.state.userPreferences} showPreferences={this.state.showPreferences} />
                                    </div>
                                )
                                    :
                                    <div>
                                        <p>Tus preferencias van aqui, introducelas</p>
                                        <ProfileModal getPreferencesUser={this.getPreferencesUser} userPreferences={this.state.userPreferences} showPreferences={this.state.showPreferences} />
                                    </div>
                                } */}

                                {this.props.loggedInUser.userfile ? (
                                    <div>
                                        <p> Esta es tu altura: {this.props.loggedInUser.userfile.height} cm</p>
                                        <p> Este es tu peso: {this.props.loggedInUser.userfile.weight} kg</p>
                                        <p> Este es tu edad: {this.props.loggedInUser.userfile.age} años</p>
                                        <p> Este es tu nivel de actividad: {this.props.loggedInUser.userfile.activitylevel}</p>
                                        <p> Tu objetivo: {this.props.loggedInUser.userfile.goal}</p>
                                        <p> Vives en: {this.props.loggedInUser.userfile.city}</p>
                                        <p> Intolerancias: {this.props.loggedInUser.userfile.intolerances}</p>
                                        <p> Preferencias alimenticias: {this.props.loggedInUser.userfile.foodPreferences}</p>
                                        <ProfileModal loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                                    </div>
                                )
                                    :
                                    <div>
                                        <p>Tus preferencias van aqui, introducelas</p>
                                        <ProfileModal loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                                    </div>
                                }

                            </div>


                        </Col>
                    </Row>
                </Container>
            </>
        )


    }
}

export default Profile
