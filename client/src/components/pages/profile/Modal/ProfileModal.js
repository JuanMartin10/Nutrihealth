import React, { Component } from 'react';
import ProfileForm from './ProfileForm'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class ProfileModal extends Component {
    constructor(props) {
        super(props)
        this.state = { showmodal: false }
    }

    closeModal = () => this.setState({ showmodal: false })
    openModal = () => this.setState({ showmodal: true })


    render() {
        return (
            <Container>
                <Button variant="dark" onClick={this.openModal}>
                    Modifica tus preferencias
                </Button>

                <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Modifica tus preferencias</h3>
                        <hr></hr>
                        <ProfileForm getPreferencesUser={() => this.props.getPreferencesUser()} userPreferences={this.props.userPreferences} closeModal={this.closeModal} />
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

export default ProfileModal