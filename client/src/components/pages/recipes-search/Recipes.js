import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import RecipeServices from '../../../services/recipes.services'
import RecipeCards from './RecipeCards'

class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: '',
            recipes: [],
            showIng: false
        }
        this.recipeservices = new RecipeServices()
    }


    getIngredients = (id) => {
        this.recipeservices.getIngredients(id)
            .then(allIngredients => this.setState({ recipes: allIngredients.hits }))
            .catch(err => console.log(err))
    }


    componentDidUpdate = (prevState) => {
        if (this.state !== prevState) {
        }
    }


    handleChange = e => {
        let { value } = e.target
        this.setState(
            { ingredients: value },
        )
    }


    handleSubmit = e => {
        e.preventDefault()
        this.getIngredients(this.state.ingredients)
    }


    sendInfo = () => this.setState({ showIng: true })


    render() {
        return (
            <Container>
                <h1>Buscador de recetas</h1>
                < Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.Label>Escribe los ingredientes que tengas en la nevera</Form.Label>
                        <Form.Control type="text" name="ingredients" placeholder="Escribe los ingredientes separados por comas" value={this.state.ingredients} onChange={this.handleChange} />
                    </Form.Group>
                    <Button className="greenButton" variant="light" type="submit" onClick={this.sendInfo}>A cocinar!</Button>
                    <br></br>
                </Form >

                <div>
                    {this.state.showIng ? (
                        this.state.recipes.length ? (
                            <Row className="m-5">
                                {this.state.recipes.map(elm => <RecipeCards key={elm.recipe.label} {...elm} setTheUser={this.props.setTheUser} />)}
                            </Row>
                        )
                            :
                            <Spinner className="spiner" animation="border" />
                    ) : null}
                </div>
            </Container >
        )
    }
}
export default Recipes  