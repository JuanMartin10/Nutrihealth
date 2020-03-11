import React from 'react'

// import './CoasterCard.css'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const NotificationsCard = ({ sender, _id, text }) => {
    return (
        <Col md={4}>
            <Card className="card-rusa">
                {/* <Card.Img variant="top" src={imageUrl} /> */}
                <Card.Body>
                    <Card.Title>{sender}</Card.Title>
                    <Card.Title>{_id}</Card.Title>
                    <Card.Title>{text}</Card.Title>


                    <hr></hr>
                    {/* <Button as="div" variant="dark" size="sm" onClick={() => chooseAdmin(_id)}>
                        yo
                    </Button> */}
                </Card.Body>
            </Card>
        </Col >
    )
}

export default NotificationsCard