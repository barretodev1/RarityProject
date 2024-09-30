import axios from 'axios'

const conexao = axios.create({
    baseURL: 'https://localhost:3000'
})

export default conexao