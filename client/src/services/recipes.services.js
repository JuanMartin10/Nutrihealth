import axios from 'axios'

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `https://api.edamam.com/`
        })
        this.api_id = process.env.REACT_APP_RECIPE_API_ID
        this.api_key = process.env.REACT_APP_RECIPE_API_KEY
    }

    getIngredients = id => this.service.get(`search?app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&q=${id}`).then(response => response.data)

}
