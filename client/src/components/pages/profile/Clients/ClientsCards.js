import React from 'react'

// import './CoasterCard.css'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const ClientsCards = (props) => {
    console.log(props)
    return (
        < Col md={6}>
            <Card className="card-rusa">
                {/* <Card.Img variant="top" src={imageUrl} /> */}
                <Card.Body>
                    <Card.Title>{props.username}</Card.Title>
                    <hr></hr>
                    <p>Edad: {props.userfile.age}</p>
                    <p>Altura: {props.userfile.height}</p>
                    <p>Peso: {props.userfile.weight}</p>
                    <p>Nivel de actividad: {props.userfile.activitylevel}</p>
                    <p>Objetivo: {props.userfile.goal}</p>
                    <p>Ciudad: {props.userfile.city}</p>
                    <p>Intolerancias: {props.userfile.intolerances}</p>
                    <p>Preferencias de comida: {props.userfile.foodPreferences}</p>

                    {/* <Button as="div" variant="dark" size="sm" onClick={() => chooseAdmin(_id)}>
                        yo
                    </Button> */}
                </Card.Body>
            </Card>
            <br></br>
        </Col >
    )
}

export default ClientsCards