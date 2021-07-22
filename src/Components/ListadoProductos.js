


import React,{useEffect} from 'react'


import Bebidas from '../Components/Bebidas'; // importando el archivco donde se desglozaan las bebidas 




//redux 
import {useSelector , useDispatch} from 'react-redux'


import { obtenerBebidasAction } from '../actions/BebidasAction';


const ListadoProductos = () => {


  const dispatch = useDispatch();


  useEffect(()=>{


      const cargaProductos = ()=> dispatch(obtenerBebidasAction ());


      cargaProductos(); // mandando a llamar la funcion


  },[]);

    // obtener el state


      const ProductoBebidas = useSelector(state => state.Bebidas.Bebidas); // acceciendo al state con useSelector 

      const error = useSelector(state => state.Bebidas.error);

    //  const cargando = useSelector(state => state.Bebidas.loading)




      //  console.log(producto);


    //const { nombre , precio , id} = ProductoBebidas


   


    return (

            <>


        <h4 className="center nav-wrapper  amber accent-4  ">Listado de Bebidas</h4>

       

            
             

     
    {error ? <p className="error">Ha ocurrido un error </p>: null}



    <table className="table highlight centered responsive-table  ">



      <tr className="">
              <th className="bebida">Bebida</th>
              <th className="bebida">Precio</th>
              <th className="bebida">Acciones</th>
          </tr>
  
        <thead>


        </thead>

        <tbody>
          
        
         { ProductoBebidas.length === 0 ? 'No hay productos' : (
         
         ProductoBebidas.map(bebidas=>(
           

           <Bebidas
           

             key={bebidas.id}
             bebidas={bebidas}



           />



         ))
       
       
       
       ) }   
 






        </tbody>

      



        

        


      </table>


            </>


    )
}

export default ListadoProductos
