



// cada reducer tiene su propio state 
import {

    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR,


    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR







}from '../types'; // importando los types


const initialState = { // en el inialstate siempre nos detenemos a pensar las propiedades que va a tener el state de Bebidas


    Bebidas : [], // va a hacer un arreglo vacio ya que vamos a tener diferentes bebidas 
    error: false, // el error va a inicar como null o false 
    loading : false, // ´por si la api tarda un poco en descargar los productos ya que una vez que comenzamos a hacer la consulta cambia a true y mostramos un texto o spinner de cargando¿
    BebidaEliminar : false,
    productoeditar : false,

}


// el reducer siempre es una funcion 
export default function(state =  initialState , action){  // si se le pasa un state esta bien , pero si no se le pasa nada le pasamos el initialstate

// de igual manera le pasamos el action que se va a ejecutar , no obstante todo el reducer es un switch

    switch(action.type){//  en los action siempre pasamos un type

        // en esta parte de aqui adentro vamos a definir todos los case que van a definir lo que va a pasar en nuestra aplicaion 
        //y van a ir cambiando el state de acuerdo a algo llamado el payload 


        case  AGREGAR_PRODUCTO: // evaluando el type que esta en la funcion agregarProducto del archivo bebidasAction.js


            return{

                ...state,
                loading: action.payload // como estoy cargando un producto loading pasa como true



            }

            case  AGREGAR_PRODUCTO_EXITO: 

            return{

                ...state,
                loading : false ,// pasa a false porque ya se guardo en la base de datos 

                Bebidas: [...state.Bebidas , action.payload] // tomamos una copia del state que es state.Bebidas
            
                    // porque si tenemos 2 productos y agregamos uno mas queremos que se mantengan esos 3 , pero agrega el nuevo
                    // 

            }

            case  AGREGAR_PRODUCTO_ERROR : 

            return{

               ...state,
               loading: false,  // lo colocamos como false, ya que intento a hacer algo y no pudo 
               error: action.payload




            }
 
            case COMENZAR_DESCARGA_PRODUCTOS : 

                return{

                    ...state,
                    loading : action.payload // loading pasa a true con un action.payload


                }



            case  DESCARGA_PRODUCTO_EXITO : 

                return {

                    ...state,
                    loading: false,
                    error : null,
                    Bebidas : action.payload


                }


            case  DESCARGA_PRODUCTO_ERROR : 

                return {

                    error: true

                }



            case OBTENER_PRODUCTO_ELIMINAR: 

                return{

                    ...state,
                    BebidaEliminar: action.payload // action.payload es lo que tenga el payload en la funcion que en este caso es el id 

                
                }


            case PRODUCTO_ELIMINAR_EXITO:

                return{

                    ...state,

                    Bebidas : state.Bebidas.filter(bebida=>bebida.id !== state.BebidaEliminar),
                    
                    BebidaEliminar : null




                }


            case  PRODUCTO_ELIMINADO_ERROR : 

            return{

                ...state,
                loading : false,
                error : action.payload

            }

            case OBTENER_PRODUCTO_EDITAR:

                return{

                    ...state,
                    productoeditar: action.payload



                }




        default:
                return state; // retornando el state como se encuentra siempre lo tenemos que hacer 




    } 





    
} 
