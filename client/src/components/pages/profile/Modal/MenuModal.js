import React, { Component } from 'react';
import ProfileForm from './ProfileForm'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import MenuForm from './MenuForm'
class MenuModal extends Component {
    constructor(props) {
        super(props)
        this.state = { showmodal: false }
    }

    closeModal = () => this.setState({ showmodal: false })
    openModal = () => this.setState({ showmodal: true })


    render() {
        console.log(this.props)
        return (
            <Container>

                <Button variant="dark" onClick={this.openModal}>
                    Introduce su menú
                        </Button>


                <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Introduce su menú</h3>
                        <hr></hr>
                        <MenuForm loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} closeModal={this.closeModal} />
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

export default MenuModal