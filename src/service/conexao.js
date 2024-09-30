import axios from 'axios'

const conexao = axios.create({
    baseURL: 'https://rarity-68f03af439e2.herokuapp.com/'
})

export default conexao