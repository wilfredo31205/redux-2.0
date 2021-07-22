

// este archivo index va a combinar todos los reducer 


import {  combineReducers } from 'redux' //  combineReducers :  para combiar varios reducer

import BebidasReducer from './BebidasReducer' // importando nuestros reducer , aqui se va a importar multiples reducer


export default combineReducers({


    Bebidas: BebidasReducer // diciendole, bueno la parte de las bebidas se va a llamar Bebidas y su reducer es BebidasReducer

    // de esta forma podemos tener multiples reducer , uno va a tener clientes, usuarios autenticado  ext 






})