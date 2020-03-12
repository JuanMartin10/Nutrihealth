import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }




    preferencesUser = (userPref) => this.service.post('/', userPref).then(response => response.data)

    sendRecipes = (recipe) => this.service.post('/fav', recipe).then(response => response.data)

    sendMenu = (deilyMeals, clientId) => {
        console.log(deilyMeals, clientId)
        return this.service.post('/menu', { deilyMeals, clientId }).then(response => {
            console.log(response.data)
            return response.data
        })
    }
    getMenu = () => this.service.get('/my-menu').then(response => response.data)
}