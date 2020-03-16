import React from 'react'


import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const NotificationsCard = (props) => {


    return (
        <Col md={4} >
            <Card className="card-rusa">
                <Card.Body>
                    <Card.Title>{props.sender.username}</Card.Title>
                    <hr></hr>
                    <Card.Title>{props.text}</Card.Title>
                    <Button className="greenButton" as="div" variant="light" size="sm" onClick={() => props.confirmNutri(props._id)}>
                        Confirmalo como cliente
                        </Button>
                </Card.Body>
            </Card>
        </Col >
    )

}
export default NotificationsCard