import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }

    sendRecipes = (recipe) => this.service.post('/fav', recipe).then(response => response.data)

}