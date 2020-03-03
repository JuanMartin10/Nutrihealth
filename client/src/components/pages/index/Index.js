import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RecipeServices from '../../../services/recipes.services'
import IngredientsCards from './ingredients-cards'
import Spinner from 'react-bootstrap/Spinner'


class Index extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: '',
            recipes: [],
        }
        this.services = new RecipeServices()
    }

    getIngredients = (id) => {
        this.services.getIngredients(id)
            .then(allIngredients => {
                console.log(allIngredients)
                this.setState({ recipes: allIngredients.hits })
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { value } = e.target
        // console.log(value)
        this.setState(
            { ingredients: value },
            // console.log(this.state)
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.getIngredients(this.state.ingredients)
    }

    render() {
        console.log(this.state.recipes)
        return (
            <Container>
                <h1>NutriHealth</h1>

                < Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.Label>Write your ingredients and look it for a recipe</Form.Label>
                        <Form.Control type="text" name="ingredients" placeholder="Write some ingredients separated with comas" value={this.state.ingredients} onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">A cocinar!</Button>
                </Form >

                <>
                    {this.state.recipes.length ? (
                        <Row>
                            {this.state.recipes.map(elm => <IngredientsCards key={elm._id} {...elm} />)}
                        </Row>
                    )
                        :
                        // <p>Cargando... Espera un momento</p>
                        <Spinner animation="border" />
                    }
                </>
            </Container >
        )
    }
}
export default Index