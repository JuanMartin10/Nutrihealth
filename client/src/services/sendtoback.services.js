import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }


    preferencesUser = (userPref) => {
        userPref.intolerances = userPref.intolerances.split(",")
        userPref.foodPreferences = userPref.foodPreferences.split(",")

        return this.service.post('/', userPref).then(response => response.data)
    }


    getPreferencesUser = id => this.service.get(`/preferences/${id}`).then(response => response.data)



    sendRecipes = (recipe) => this.service.post('/fav', recipe).then(response => response.data)

}