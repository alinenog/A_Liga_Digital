import axios from 'axios'

/*Criando ponto de conexxão */
const api = axios.create({
    baseURL:'http://localhost:3000'
})

export default api;