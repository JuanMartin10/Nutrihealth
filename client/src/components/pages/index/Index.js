import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import IndexNotLogged from './IndexNotLogged'
import IndexLogged from './IndexLogged'


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
                            <IndexLogged loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} {...this.props} />
                        )
                        :
                        (
                            <IndexNotLogged loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} {...this.props} />
                        )}
                </>
            </Container >

        )
    }
}

export default Index  
