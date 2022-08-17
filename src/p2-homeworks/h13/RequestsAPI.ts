import axios from 'axios'


let instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const RequestAPI = {

    requestServer(i: boolean) {
        return instance.post('', {success: i})
    }
}
