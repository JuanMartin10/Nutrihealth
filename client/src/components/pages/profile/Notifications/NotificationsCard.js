import React from 'react'


import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const NotificationsCard = (props) => {

    console.log(props.sender.username)
    return (
        <Col md={4} >
            <Card className="card-rusa">
                {/* <Card.Img variant="top" src={imageUrl} /> */}
                <Card.Body>
                    <Card.Title>{props.sender.username}</Card.Title>
                    <Card.Title>{props.text}</Card.Title>




                    <hr></hr>
                    <Button as="div" variant="dark" size="sm" onClick={() => props.confirmNutri(props._id)}>
                        Confirmalo como cliente
                        </Button>
                </Card.Body>
            </Card>
        </Col >
    )

}
export default NotificationsCard