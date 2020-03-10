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

    chooseAdmin = admin => {
        return this.service.post('/choose', { admin }).then(response => response.data)
    }


}