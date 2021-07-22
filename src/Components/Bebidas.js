


import React,{useEffect} from 'react';
import NuevoProducto from './NuevoProductos';

import Swal  from 'sweetalert2';

import { useDispatch } from 'react-redux';

import { borrarProductoAction } from '../actions/BebidasAction';




const Bebidas = ({bebidas}) => {

    const { nombre , precio , id} = bebidas


    const dispatch = useDispatch();


    // Confirmar si el usuario desea eliminarlo 


    const confirmationDelete = ( id) =>{


        // preguntar al usuario si desea eliminarlo

        Swal.fire({ // ESTE SOLAMENTE PREGUNTA AL USUARIO SI DESEA ELIMINAR Y LO PASA AL ACTION DE BEBIDA ACTION.JS
            title: 'Estas seguro de eliminar esto ?',
            text: "Una vez que lo elimines no podras recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo eliminarlo!',
            cancelButtonText:  'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
            // pasarlo al action

            dispatch(borrarProductoAction(id)); // EN ESTA  FUNCION ESTA LA OTRA PARTE DE SWAL QUE CONFIRMA SI DESEAMOS ELIMINAR LA BEBUDA




            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            }
          })





        // // pasarlo al action

        // dispatch(borrarProductoAction(id));




    }







    return (


        
        <>

        <tr className="centrado">



        <td className="">{nombre}</td>

        <td className="precio">{precio}</td>



        <td>

<button className="btn waves-effect waves-light editar amber accent-4 "

type="submit"name="action">Editar
<i class="material-icons right">create</i>
</button>


<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

<div id="modal1" class="modal">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>






<button className="btn waves-effect waves-light editar  green darken-1" 
onClick={ () =>confirmationDelete(id)}
type="submit"name="action">Eliminar
<i class="material-icons right">delete_outline</i>

</button>


</td>




        </tr>

        

   
    {/* <table className="highlight  centered">
        <thead>
  
          <tr>
        

          </tr>
        </thead>

        <tbody>
            
        
          <tr className="centered">
          
            <td className="centrar">{nombre}</td>
            <td className="bebida">{precio}</td>
            
            <td>

            <button className="btn waves-effect waves-light editar amber accent-4" type="submit"name="action">Editar
            <i class="material-icons right">create</i>
            </button>


            <button className="btn waves-effect waves-light editar  green darken-1" type="submit"name="action">Eliminar
            <i class="material-icons right">delete_outline</i>
            </button>


            </td>
          </tr>
         
        </tbody>
      </table>
             
 */}


        </>
      
          


    )
}

export default Bebidas




// <button className="btn waves-effect waves-light editar amber accent-4" type="submit"name="action">Editar
// <i class="material-icons right">create</i>
// </button>

// <button className="btn waves-effect waves-light editar  green darken-1" type="submit"name="action">Eliminar
// <i class="material-icons right">delete_outline</i>
// </button>