import React,{Fragment , useState} from 'react';
import { Link } from 'react-router-dom'

import {  useDispatch , useSelector } from "react-redux";


// useDispatch nos sirve para mandar a ejecutar las acciones que tengamos 
//useSelector es una forma en la que vamos a acceder al state dentro del componente

//useSelector es el hook que nos react reduc para leer lo que tengamos en el state 



import Presidente from '../images/presidente.jpg';




// action de redux 


import { CrearNuevoProductoAction } from '../actions/BebidasAction'; // importando la funcion del archivo de redux BebidasAction






const Formulario = ({history}) => { // utilizamos history para redireccionar 



    // state

    const [nombre, setNombreBebida] = useState('')

    const [precio, setPrecio] = useState(0)

    const [id, setID] = useState(' ')


    // utilizar use dispatch y te crea o devuelve una  funcion 


     const dispatch = useDispatch(); // y esto le retorna dispatch a la funcion 


       

            // UseSelector es el hook que nos da react redux, para leer que haiga en el state


         // acceder  al state store


         const cargando = useSelector(state =>state.Bebidas.loading); // state =>state : viendo todo el state

        //state.productos.loading : accediendo al state de loading 


       //  console.log(cargando);



        const error = useSelector(state=>state.Bebidas.error)

     //   console.log(error);



    // mandar a llamar el action de producto action 

    const agregarProducto = (producto)=> dispatch( CrearNuevoProductoAction(producto) ) // el dispatch es como una funcion que toma otra funcion 
    
    // dispatch lo vamos a utilizar para mandar a llamar las funciones que tengamos en el action 
    


    // aqui se utiliza una funcion de redux que mande a llamar el action que en este caso es 
    // CrearNuevoProductoAction

     // cuando el usuario haga submit 

     const submitNuevoProducto = (e)=>{

        e.preventDefault();

        // validar el formulario

        if(nombre.trim() === ' ' || precio <= 0 || id.trim() === ''){

            return ;



        }




        // // si no hay errores 



        // crear el nuevo producto 
        
        agregarProducto({// una vez que el usuario de submit mandamos a llanar   agregarProducto

            nombre, // AGREGANDO LOS VALORES DE LOS STATE 
            precio,
            id


//const agregarProducto = (producto)=> dispatch( CrearNuevoProductoAction(producto) ) / como tenemos un producto en la funcion agregarProducto
// le pasamos un parametro  a la funcion agregarProducto  que en este caso de producto para que asi se ejecute el producto que insertamos 
            
        }); 




        // redireccionar a lista de bebidas 

        history.push('/listado');





        // agregar producto es una funcion que utiliza dispatch para comunicarse con las acciones y 
         
        // manda a ejecutar la otra funcion CrearNuevoProductoAction


        
    }



    return (
     
        <Fragment>

        <form

            onSubmit={submitNuevoProducto}
        
        >
        <div className="row">
        <div class="card-panel teal amber accent-4  center-align titulo ">Agrega tu bebida favorita</div>
            
  
        <div  className="input-field col s4 m4  l2">


        <input 
        
        placeholder="Nombre"
        type="text"
        className="validate animate__animated animate__flip"
        value={nombre}
        
        onChange={e=>setNombreBebida(e.target.value)}
        
        />
        <label for="first_name ">Nombre de Bebida</label>
        </div>


         <div  className="input-field col s4 m4 l2">

           

        <input 
        
        placeholder="Precio "
        type="number"
        className="validate animate__animated animate__flip"
        value={precio}
        onChange={e=>setPrecio(Number(e.target.value))}
     
        
        />
        <label for="first_name ">Precio de Bebida</label>
        </div>
        


         <div  className="input-field col s4 l2">

        <input 
        
        placeholder="Codigo "
        type="number"
        className="validate animate__animated animate__flip"
        value={id}
        onChange={e=>setID(e.target.value)}
     
        
        />
        <label for="first_name ">Codigo de Bebida</label>
        </div>

      

        </div>


        
        <button class="btn waves-effect waves-light btn-large boton   green darken-1animate__animated animate__backInUp boton" type="submit" name="action"
        
        
       
        >
            Agregar Bebida
            
         
            <i class="material-icons left">add_shopping_cart</i>


            
            
            </button>
    
    

            <button class="btn waves-effect waves-light btn-large boton    green darken-1 animate__animated animate__backInUp boton-editar" type="submit" name="action">
            Editar Bebida
            
            <i class="material-icons left">edit</i>
            
            </button>
    





        <div className="row">

        <div className="col s4   ">

      

        <img src={Presidente} className="imagen" alt="imagenfondo" />

        

        </div>

       



        </div>

        </form>


        { cargando ? <p>Cargando...</p> : null }



        { error ? <p className="error">Hubo un error brother</p> : null }



        </Fragment>
     
        
    )
    
}



export default Formulario
