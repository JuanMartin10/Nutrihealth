import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import IndexNotLogged from './IndexNotLogged'
import IndexLogged from './IndexLogged'

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

    componentDidMount = () => this.render()


    render() {
        return (
            <Container>
                <>
                    {this.props.loggedInUser ?
                        (
                            <IndexLogged loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                        )
                        :
                        (
                            <IndexNotLogged loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
                        )}
                </>
            </Container >

        )
    }
}

export default Index  
