


// estas son las funciones que modifican el state 

import { // bebidas reudcer y bebida action tambien  tienen los mismos types , es como mapear la bebida reducxer y la bebida actions 

    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR ,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINADO_ERROR





}from '../types'; // importando los types

import Swal from 'sweetalert2';


import  clienteAxios from '../configAxios/axios';

// usualmente en nuesto BebidaAction  vamos a tener una funcion que es la  funcion que se va a utilizar en la vista  



//  crear nuevos productos 


// en el action tenemos una funcion que se tiene que utilizar en el componente , de esa forma esa  
// los datos del componente se puede pasar a la acciones 



export function CrearNuevoProductoAction(producto){ // esta funcion se va a exportar al componente formulario

    
    
    return  async (dispatch)=>{ // retornando un arrow function de aqui se inserta a la base de datos y tambien se manda a ejecutar
        // el reducer para modificar el state  


            dispatch(agregarProducto ()); // funcion declarada mas abajo




            try {


          




                // insertando datos en la api 

               await clienteAxios.post('/productos',producto)


                // si todo sale bien , actualiza el state 
                dispatch(agregarProductoExito(producto)) // si todo sale bien le pasamos el producto a esta funcion que vamos a declarar mas abajo 

                    // despues que agregamos el producto mostramos una aleerta


                    Swal.fire(

                        'Correcto',
                        'El producto se ha agregado correctamente',
                        'success'


                    )



            } catch (error) {

                console.log(error);

                // si hay un erro cambiar el state 
                dispatch(agregarProductoError(true)) // si hay un error 


                // alerta de error

                Swal.fire({ 

                     icon:'error',
                     title: 'Hubo un error. intenta de nuevo ',
                     text: 'Hubo un error '


                })




                
            }
        







      //  console.log(producto); // eb esta parte de aqui se realizara todo el trabajo ds insercion a la base de datos o tambien 
        // mandar a ejecutar el reducer para modificar el state 

    }
}


    const agregarProducto = ()=>({

        type: AGREGAR_PRODUCTO,
        payload: true
      //  payload: // payload seria supongamos la parte que va a modificar los datos , lo que va a modificar el state
        // si solamente le estamos diciendo que vamos a agregar un producto probablemente no tengamos ningun payload , 
        // por lo tanto no es como obligatorio que lo usemos 
         


        // siempre que definimos una funcion aqui la tenemos que definir en el el reducer

    })


    // si el producto se guarda en la base de datos 

    const agregarProductoExito = (producto)=>({ // lo que esta en este parentesis es el action 

        type: AGREGAR_PRODUCTO_EXITO,
        payload: producto // el payload es lo que pasamo como parametro 

        // el payload son los datos que le estamos pasando  que en este caso es el producto  que viene desde la vista
        //  const agregarProducto = (producto)=> dispatch( CrearNuevoProductoAction(producto) ) y le pasamos el payload a esta funcion 

    })


    const agregarProductoError = ( estado)=>({


        type:   AGREGAR_PRODUCTO_ERROR, 
        payload: estado 

    })


    // FUNCION QUE DESCARGA LA BEBIDAS DE LA BASE DE DATOS

    export function obtenerBebidasAction(){

        return async(dispatch)=>{

            dispatch(descargarBebidas ());


                try {
                    // si todo sale bien consultamos la api 
                    
                 

                        
                    const respuesta = await clienteAxios.get('/productos')

                    dispatch(descargaproductoExitosa(respuesta.data)) // de
                    
                    






                 // se pasa a la funcion descargaproductoExitosa que esta declarada mas abajo y el payload van a hacer los productos

              //      console.log(respuesta.data)



    
                } catch (error) {

                    console.log(error);

                        dispatch(descargarBebidaError ());

                    
                }

        }
  
    }


    const descargarBebidas = ()=>({

        type: COMENZAR_DESCARGA_PRODUCTOS,
        payload: true  // va a ddecir true si lo descarga

    })


    const descargaproductoExitosa = (productos) =>({ // una vez que se mande a llamar va a tomar los productos


        type: DESCARGA_PRODUCTO_EXITO,
        payload: productos // el payload van a hacer los productos  que le estamos pasando como parametro 


    })


    const descargarBebidaError = () =>({

        type: DESCARGA_PRODUCTO_ERROR
    })


    // Selecciona y elimina el producto



export function borrarProductoAction(id){ // tomando el id para eliminar 


        return async (dispatch) =>{


            dispatch(obtenerProductoEliminar(id))



            try {

                const resultado = await clienteAxios.delete(`/productos/${id}`)

                dispatch(deleteProductoExito ()); // SI LO ELIMINA EJECUTAMOS ESTA FUNCION



                // SI SE ELIMI NA 


                Swal.fire(
                        'Eliminado!',
                        'La bebida se elimino correctamente',
                        'success'
                      )


                console.log(resultado);



                
            } catch (error) {
                
                console.log(error);

                dispatch(deleteProductoError ())


            }







            console.log(id);


        }
}


const obtenerProductoEliminar = (id )=>({ // el mismo id que le pasamos se lo pasamos aqui tambien 

    type: OBTENER_PRODUCTO_ELIMINAR,
    payload : id // lo que el usuario presione vamos a tener ese id y ejecutamos esta funcion borrarProductoAction 



})


const deleteProductoExito = ()=>({ // NO VA A TOMAR NINGUN PARAMETRO YA QUE SE VA A EJECUTAR LO QUE ESTE EN EL STATE


    type: PRODUCTO_ELIMINAR_EXITO
   


})

const deleteProductoError = ()=>({

    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true




})