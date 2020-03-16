import React from 'react'


import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const NutriCards = ({ username, _id, chooseAdmin }) => {
    return (
        <Col md={4}>
            <Card className="card-rusa">
                <Card.Body>
                    <p>Nutricionista:</p><Card.Title>{username}</Card.Title>
                    <hr></hr>

                    <Button className="greenButton" as="div" variant="light" size="sm" onClick={() => chooseAdmin(_id)}>
                        Seleccionar como nutricionista
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default NutriCards