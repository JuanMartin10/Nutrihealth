import React from 'react'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import { Link } from 'react-router-dom'


const IngredientsCards = (props) => {
    return (
        <>
            <CardDeck>
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={props.recipe.image} />
                    <Card.Body>
                        <Card.Title>{props.recipe.label}</Card.Title>
                        <Card.Text>
                            <li> {props.recipe.ingredientLines}</li>
                        </Card.Text>
                        <Button as="div" variant="dark"><Link to={props.recipe.url}>Más detalles</Link></Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{props.recipe.dietLabels}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )
}

export default IngredientsCards