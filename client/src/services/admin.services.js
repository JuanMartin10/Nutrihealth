import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/admin`,
            withCredentials: true
        })
    }


    getAdminUsers = () => {
        // console.log(response.data)
        return this.service.get('/').then(response => response.data)

    }

    // preferencesUser = (userPref) => {
    //     console.log('este es el userPref de sendtoback.servicesuserPref', userPref)
    //     return this.service.post('/', userPref).then(response => response.data)
    // }


    // sendRecipes = (recipe) => this.service.post('/fav', recipe).then(response => response.data)

}