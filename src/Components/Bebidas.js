


import React,{useEffect, useState} from 'react';
import NuevoProducto from './NuevoProductos';

import Swal  from 'sweetalert2';

import { useDispatch } from 'react-redux';

import { borrarProductoAction, obtenerProductoEditar } from '../actions/BebidasAction';



import Staburck from '../images/staburck.gif';



// cModal
import Modal from '@material-ui/core/Modal'; // importando el componente de Modal
import { makeStyles } from '@material-ui/core/styles';  /// Importando los stilos del modal 
import Formulario from './Formulario';

import { useHistory } from 'react-router-dom'



function getModalStyle() { // ESTILOS DE POSICION 
  const top = 50 ; // DEFINIENDO LA UBICACION DEL MODA 
  const left = 50;

  return {        
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({ // ESTILOS DE CSS 
  paper: {
    position: 'absolute',
    width: 800,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));







const Bebidas = ({bebidas}) => {

    // CONFIGURACION DEL MODAL DE MATERIAL - UI

    const [ modalStyle ] = useState(getModalStyle);

    const [ open  , setOpen ] = useState(false) // state para abrir y cerrar el modal


    const classes = useStyles()


    const handleOpen = ()=>{


        setOpen(true); // cuando se ejecute esta funcion llamada handleOpen se va a abrir el modal 


    }



    const handleClose  = ()=>{


      setOpen(false); // cuando se cierre el modal 




  }




    const { nombre , precio , id} = bebidas


    const dispatch = useDispatch();

    const history = useHistory(); // habilitar history para redireccionar


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




    const redireccionarEdicion =  producto =>{

      history.push(`/productos/editar/${producto.id}`)



    }






    return (


        
        <>

        <tr className="centrado">



        <td className="">{nombre}</td>

        <td className="precio">{precio}</td>



        <td>

    <button className="btn waves-effect waves-light editar amber accent-4 "
    onClick={ ()=>handleOpen()}
    type="submit"name="action">Editar

    <i class="material-icons right">create</i>
    </button>

<Modal

// este modal es un componente y require que le pasemos ciertas configuracion 


      open={open} // diciendole si va a estar abierto o no 

      onClose={()=>{ // para cerrar el modal 

        handleClose();  


      }}
      


>

    <div style={modalStyle} className={classes.paper}>
    <h4 className="animate__animated animate__zoomInDown ">Edicion de bebidas</h4>

    <img src={Staburck } className="imagen" alt="imagenfondo" />
 
   
    <div class="row">


    <form class="col s10">

    <div class="row">



    <div class="input-field col s4">


    <input placeholder="Ej: Wisky" id="first_name" type="text" class="validate"></input>

    <label for="first_name">Nombre Bebida</label>

    </div>
    <div class="input-field col s4">
          <input id="last_name" type="number" class="validate" placeholder="Ej: 500"></input>
          <label for="last_name">Precio</label>
        </div>



    </div>


    <button class="btn waves-effect waves-light" 
    onClick={()=>redireccionarEdicion(bebidas)}
    type="button"
     name="action">Editar
     
    <i class="material-icons right">send</i>
  </button>

          
 

    </form>





    </div>





    </div>



</Modal>






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