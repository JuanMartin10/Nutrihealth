import React, { Component } from 'react'

// import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import SendRecipes from '../../../services/sendrecipes.services'
import './RecipeCards.css';


class IngredientsCards extends Component {
    constructor(props) {
        super(props)
        this.state = { recipe: this.props.recipe }
        this.sendservices = new SendRecipes()
    }

    sendRecipes = () => {
        this.sendservices.sendRecipes(this.state.recipe)
            .then(theRecipe => console.log(theRecipe))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <CardDeck className="card">
                    <Card style={{ width: '28rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.recipe.label}</Card.Title>
                            <Card.Img variant="top" src={this.props.recipe.image} />
                            <Card.Text>
                                <ul>
                                    {this.props.recipe.ingredientLines.map(elm => <li>{elm}</li>)}
                                </ul>
                            </Card.Text>
                            <Button as="div" variant="dark"><a target="_blank" rel="noopener noreferrer" href={this.props.recipe.url}>Más detalles</a></Button>
                            <Button variant="dark" type="submit" onClick={this.sendRecipes}>Guarda en favoritos</Button>

                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{this.props.recipe.dietLabels}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </>
        )
    }
}

export default IngredientsCards