import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/profile',
            withCredentials: true
        })
    }

    sendRecipes = ([recipes]) => this.service.post('/fav', { recipes }).then(response => response.data)
    // login = ({ username, password }) => this.service.post('/login', { username, password }).then(response => response.data)
    // logout = () => this.service.post('/logout').then(response => response.data)
    // loggedin = () => this.service.get('/loggedin').then(response => response.data)
}