import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/admin`,
            withCredentials: true
        })
    }


    getAdminUsers = () => this.service.get('/').then(response => response.data)


    chooseAdmin = admin => this.service.post('/choose', { admin }).then(response => response.data)


    getNotifications = () => this.service.get('/notifications').then(response => response.data)


    confirmNutri = notifId => this.service.post('/confirm', { notifId }).then(response => response.data)

    getClients = () => this.service.get('/clients').then(response => response.data)

}