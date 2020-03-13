import React from 'react'


import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'



const FavRecipesCard = (props) => {

    console.log(props)
    return (
        <Col md={6} >
            <Card className="m-3">
                <Card.Body>
                    <div className="d-flex align-items-center">

                        <Card.Img className="cardImg" src={props.image} />
                        <Card.Title className="ml-3">{props.label}</Card.Title>
                    </div>
                    <Card.Text as="div" className="mt-3">
                        <ul>
                            {props.ingredients.map(elm => <li>{elm.text}</li>)}
                        </ul>
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                    </div>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.dietLabels}</small>
                </Card.Footer>
            </Card>
        </Col >
    )

}
export default FavRecipesCard