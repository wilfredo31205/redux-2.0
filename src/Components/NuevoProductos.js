



import React,{Fragment} from 'react';

import Presidente from '../images/presidente.jpg';


const NuevoProducto = () => {


    return (

        <Fragment>

        
        <div className="row">
        <div class="card-panel teal amber accent-4  center-align titulo ">Agrega tu bebida favorita</div>
            

        <div  className="input-field col s4 m4  l2">

        <input 
        
        placeholder="Nombre"
        type="text"
        className="validate animate__animated animate__flip"
        
        />
        <label for="first_name ">Nombre de Bebida</label>
        </div>


         <div  className="input-field col s4 m4 l2">

        <input 
        
        placeholder="Precio "
        type="number"
        className="validate animate__animated animate__flip"
        
        />
        <label for="first_name ">Precio de Bebida</label>
        </div>
        


         <div  className="input-field col s4 l2">

        <input 
        
        placeholder="Precio "
        type="number"
        className="validate animate__animated animate__flip"
        
        />
        <label for="first_name ">Codigo de Bebida</label>
        </div>

      

        </div>


        
        <button class="btn waves-effect waves-light btn-large boton pink lighten-1 animate__animated animate__backInUp boton" type="submit" name="action">
            Agregar Bebida
            
            <i class="material-icons left">add_shopping_cart</i>
            
            </button>
    

        <div className="row">

        <div className="col s4   ">

      

        <img src={Presidente} className="imagen" alt="imagenfondo" />

        

        </div>

       



        </div>




        </Fragment>
      
    )
}

export default NuevoProducto
