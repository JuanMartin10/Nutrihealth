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
                {this.props.loggedInUser.userfile ?
                    (
                        <Button className="greenButton" variant="light" onClick={this.openModal}>
                            Modifica tus preferencias
                        </Button>
                    )
                    :
                    (
                        <Button className="greenButton" variant="light" onClick={this.openModal}>
                            Introduce tus preferencias
                        </Button>
                    )
                }

                <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Modifica tus preferencias</h3>
                        <hr></hr>
                        <ProfileForm loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} closeModal={this.closeModal} />
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

export default ProfileModal