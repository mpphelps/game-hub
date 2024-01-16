import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
    
    key: 'a6b931d1386348abbdc6577b0fe67be3'
}})