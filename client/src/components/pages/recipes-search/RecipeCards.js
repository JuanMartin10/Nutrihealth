import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import SendToBack from '../../../services/sendtoback.services'
import './RecipeCards.css';


class IngredientsCards extends Component {
    constructor(props) {
        super(props)
        this.state = { recipe: this.props.recipe }
        this.sendservices = new SendToBack()
    }

    sendRecipes = () => {
        this.sendservices.sendRecipes(this.state.recipe)
            .then(theRecipe => {
                console.log(this.props)
                console.log(theRecipe)
            })
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Col>
                <Card className="mb-3" style={{ width: '28rem' }}>
                    <Card.Body>
                        <div className="d-flex align-items-center">

                            <Card.Img className="cardImg" src={this.props.recipe.image} />
                            <Card.Title className="ml-3">{this.props.recipe.label}</Card.Title>
                        </div>
                        <Card.Text className="mt-3">
                            <ul>
                                {this.props.recipe.ingredientLines.map(elm => <li>{elm}</li>)}
                            </ul>
                        </Card.Text>
                        <div className="d-flex justify-content-around">

                            <Button className="greenButton" as="div" variant="light"><a target="_blank" rel="noopener noreferrer" href={this.props.recipe.url}>Más detalles</a></Button>
                            <Button className="greenButton" variant="light" type="submit" onClick={this.sendRecipes}>Guarda en favoritos</Button>
                        </div>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{this.props.recipe.dietLabels}</small>
                    </Card.Footer>
                </Card>
            </Col>

        )
    }
}

export default IngredientsCards