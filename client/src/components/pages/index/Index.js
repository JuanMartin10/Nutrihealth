import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RecipeServices from '../../../services/recipes.services'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: '',
            recipes: [],
        }
        this.services = new RecipeServices()
    }

    getRecipesWithIngredients = (id) => {
        this.services.getRecipesWithIngredients(id)
            .then(allIngredients => {
                console.log(allIngredients)
                this.setState({ recipes: allIngredients.hits })
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { value } = e.target
        console.log(value)
        this.setState(
            { ingredients: value }, console.log(this.state)
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.getRecipesWithIngredients(this.state.ingredients)
    }

    render() {
        console.log(this.state.recipes)
        return (
            <Container>
                <h1>NutriHealth</h1>

                < Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.Label>Write your ingredients and look it for a recipe</Form.Label>
                        <Form.Control type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">A cocinar!</Button>
                </Form >

            </Container >
        )
    }
}
export default Index