



import React,{useState} from 'react';


import {Modal, TextField , Button} from '@material-ui/core'



import {makeStyles} from '@material-ui/core/styles'




const useStyle=makeStyles((theme) =>({

    modal:{

        position: 'absolute',
        width: 400,

        backgroundColor:'white',

        border: '2px solid #000',
        
        boxShadow: theme.shadows[5],

        padding: '16px  , 32px , 24px',

        top: '50%',
        left: '50&',
        
        transform: 'translate (-50%, -50%)',

    },

    textfield:{

        width: '100%'



    },



    container:{

        textAlign: "center"


    }



}))




const App = () => {


    const styles = useStyle();



    const [modal, setmodal] = useState(false);



    const abrirCerrarModal = ()=>{


        setmodal(modal)


    }






    const body=(

        <div className={styles.modal}>


        <div align="center">

        <h2>Bebidas</h2>
        </div>


        <TextField label="Nombre" className={styles.textfield} />

        <br />

        <TextField label="Precio" className={styles.textfield} />


        
        <TextField label="id" className={styles.textfield} />

        <br />                  
     


        <div align="right">


        <Button color="primary">Editar</Button>

        
        <Button>Salir</Button>





        </div>

     
        </div>




    )




    return (

        <>

        <div className={styles.container}>



        <Button className={styles.button} onclick={()=>abrirCerrarModal()}>Abrir Modal</Button>


        <modal

        open={modal}
        
        onclose={abrirCerrarModal}>
        
        
            {body}



        </modal>





        </div>







        </>

    )
}

export default App
