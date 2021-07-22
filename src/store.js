


// el store es el encargado del state y toda la aplicacion completa 

import {createStore , applyMiddleware , compose}  from 'redux'; 

import thunk from 'redux-thunk'; // redux thunk nos permite utilizar funciones asincronas , hay muchas variaedes en redux 

import reducer from './Reducers'; // importando el reducer 



// applyMiddleware lo vamos a utilizar ya que como vamos a utilizar thom con applyMiddleware podemos utilizar thom y lo agrega como parte del store
 

// el reducer es por ejemplo es cada pieza por ejemplo productos, usuarios, clientes,ect.. cada uno de ellos va a tener su propio state

// pero al final todos van a estar juntos como uno solo 




const store = createStore(

    // este createstore va a tomar los siguientes parametros

    reducer,
    compose( applyMiddleware(thunk),// se requiere ya que vamos a utilizar  thunk, sino lo utilizamos no se requiere
    
    typeof window === 'object' &&

        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !=='undefined' ? 
        
        
        window.__REDUX_DEVTOOLS_EXTENSION__() : f=> f


        // dentro de esta parte vamos  a utilizar el codigo para utilizar redux-developer-tools

           // estos codigos detectan si tenemos redux-developer-tools
      // estos codigos detectan si tenemos redux-developer-tools
          
    
    
    ) 





);


export default store; // este store se rquiere en el componente principal para que fluyan los datos a lo largo de todo el proyecto 


