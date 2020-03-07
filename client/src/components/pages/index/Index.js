import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import RecipeServices from '../../../services/recipes.services'
// import IngredientsCards from '../recipes/ingredients-cards'
// import Spinner from 'react-bootstrap/Spinner'


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    // componentDidMount = () => console.log(this.props.loggedInUser.username)


    render() {
        return (
            <Container>
                <>
                    {this.props.loggedInUser ?
                        (
                            <h1>Hola, {this.props.loggedInUser.username}</h1>
                        )
                        :
                        (
                            <h1>Bienvenidos</h1>
                        )}
                </>
            </Container>

        )
    }
}

export default Index  
