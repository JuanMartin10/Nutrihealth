import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RecipeServices from '../../../services/recipes.services'
import IngredientsCards from './ingredients-cards'
import Spinner from 'react-bootstrap/Spinner'


class Recipes extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: '',
            recipes: [],
            showIng: false
        }
        this.services = new RecipeServices()
    }

    getIngredients = (id) => {
        this.services.getIngredients(id)
            .then(allIngredients => {
                console.log(allIngredients)
                this.setState({ recipes: allIngredients.hits })
            })
            // .then(() => {
            //     console.log(this.state.recipes)
            //     this.services.sendRecipes(this.state.recipes)
            // })
            .catch(err => console.log(err))
    }

    componentDidUpdate = (prevState) => {
        if (this.state !== prevState) {

        }
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

    sendInfo = () => this.setState({ showIng: true })


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

                    <Button variant="dark" type="submit" onClick={this.sendInfo}>A cocinar!</Button>
                    <br></br>
                </Form >

                <div>
                    {this.state.showIng ? (
                        this.state.recipes.length ? (
                            <Row>
                                {this.state.recipes.map(elm => <IngredientsCards key={elm.recipe.label} {...elm} />)}
                            </Row>
                        )
                            :
                            <Spinner animation="border" />
                    ) : null}

                </div>
            </Container >
        )
    }
}
export default Recipes  