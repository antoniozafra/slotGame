import React from 'react'
import { GenerateRandomNumber } from '../../rng/GenerateRandomNumber'


export const Botonera = () => {

const displayPremios = () => {
  document.getElementById('infoPremios').style.display = 'block'

}


const generatePlay = ()=>  {

  //REPRODUCIMOS EL AUDIO CADA VEZ QUE EL USUARIO HACE CLICK EN EL BOTON DE TIRAR
  // const sound = new Audio(require('../../soundFX/activarBoton.mp3'));
  // sound.play();
    GenerateRandomNumber();
    
    
  
}


  return (
    <>

      {/* <p>AJUSTES</p> */}

      <div className='row container-fluid' id='botonera'>
        {/* <div className='clearFix'></div> */}

          <div className='  col-2 text-center mt-2 boton' id='contenedorLineas'>
            <h3 className=''>LINEAS</h3>
            <span>10</span>

          </div>


          <div className='  col-2 text-center mt-3 boton' >
            <h3 className=''>APUESTA</h3>
            <span id='valorApuesta'>1</span>
            <span >€</span>

          </div>


          <div className='  col-2 text-center mt-3 boton' >
            <h3 >DINERO</h3>
            <span id='valorDinero'>1000</span>
            <span>€</span>

          </div>


          <div className='  col-2 text-center mt-3 boton' id='generatePlay' onClick={generatePlay}>
            <h3 >Girar</h3>

           {/* <audio controls >
             <source  type='audio/mpeg' src='../../soundFX/activarBoton.mp3'/>
            </audio> */}

            {/* <img className='w-75' src={boton} />   */}

          </div>
          
          <div className='  col-2 text-center mt-3 boton' id='casillaPremio'>
            <h3 className=''>PREMIO</h3>
            <span>0 €</span>

          </div>


          <div className='  col-2 text-center mt-3 ' id="infoPremios">
            <h6 className='text-white border p-4' onClick={displayPremios}><a   className='text-light'>INFORMACION DE PREMIOS</a></h6>

          </div>


            

        

      </div>

    
      
      {/* </div> */}



      
            </>
  )
}
