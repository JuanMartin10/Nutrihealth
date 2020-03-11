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

    getNotifications = () => {
        return this.service.get('/notifications').then(response => response.data)
    }

    confirmNutri = notifId => {
        console.log('Estos son los servicios:', notifId)
        return this.service.post('/confirm', { notifId }).then(response => response.data)
    }
    getClients = () => {
        return this.service.get('/clients').then(response => response.data)
    }
}