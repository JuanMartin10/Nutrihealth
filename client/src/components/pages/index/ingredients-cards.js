import React from 'react'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom'
import './ingredients-cards.css';


const IngredientsCards = (props) => {
    return (
        <>
            <CardDeck className="card">
                <Card style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>{props.recipe.label}</Card.Title>
                        <Card.Img variant="top" src={props.recipe.image} />
                        <Card.Text>
                            <ul>
                                {props.recipe.ingredientLines.map(elm => <li>{elm}</li>)}
                            </ul>
                        </Card.Text>
                        <Button as="div" variant="dark"><a target="_blank" href={props.recipe.url}>Más detalles</a></Button>
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