
import axios from 'axios';


/// creando un cliente axios para consumir la api desde el front 
const clienteAxios = axios.create({

    baseURL: 'http://localhost:4000' // url de la api 


})

export default clienteAxios;