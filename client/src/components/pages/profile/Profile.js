import React from 'react'

const Profile = props => {
    console.log(props)
    return <h1>Soy el perfil de: {props.loggedInUser.username}</h1>
}


export default Profile