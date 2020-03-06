import React, { Component } from 'react';
import ProfileForm from './ProfileForm'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class ProfileModal extends Component {
    constructor() {
        super()
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
                        <h3>Nueva montaña rusa</h3>
                        <hr></hr>
                        <ProfileForm closeModal={this.closeModal} refreshList={this.getAllCoasters} />
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

export default ProfileModal