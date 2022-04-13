import React from 'react'
import boton from '../../images/boton.png'
import { GenerateRandomNumber } from '../../rng/GenerateRandomNumber'


export const Botonera = () => {
const generatePlay = ()=>  {
  for (let i = 0; i < 200; i++) {
    
    GenerateRandomNumber();
    
  }
}







  return (

    <div className='container-fluid  ' id='botonera'>
      {/* <p>AJUSTES</p> */}

      <div className='row container-fluid'>
        <div className='clearFix'></div>

          <div className=' bg-primary col-12 text-center mt-2' id='contenedorLineas'>
            <h3 className=''>LINEAS</h3>
            <span>10</span>

          </div>


          <div className=' bg-primary col-12 text-center mt-3' id='contenedorLineas'>
            <h3 className=''>APUESTA</h3>
            <span>1€</span>

          </div>


          <div className=' bg-primary col-12 text-center mt-3' id='contenedorLineas'>
            <h3 className=''>DINERO</h3>
            <span>1000.24</span>

          </div>


          <div className=' bg-primary col-12 text-center mt-3' id='contenedorLineas'>
            <h3 className=''>PREMIO</h3>
            <span>11€</span>

          </div>

          <div className=' bg-primary col-12 text-center mt-3' id='contenedorLineas' onClick={generatePlay}>
            <h3 className=''>Girar</h3>
            <img className='w-75' src={boton} />  

          </div>

        

      </div>
      
      </div>
  )
}
