import React from 'react'
import { Botonera } from './Botonera'
import { Rodillo1 } from './Rodillo1'
import { Rodillo2 } from './Rodillo2'
import { Rodillo3 } from './Rodillo3'
import { Rodillo4 } from './Rodillo4'
import { Rodillo5 } from './Rodillo5'
import { TituloSlot } from './TituloSlot'






export const Slot = () => {
  return (
      <>
      <TituloSlot/>


      {/*FILA QUE CONTIENE TODA LA APLICACION */}
      <div className='container-fluid row '>
       
        {/*COLUMNA QUE CONTIENE LOS RODILLOS */}
        <div class=' col-md-9 '>

          <div className='container-fluid row' id='rodillos'>

          <Rodillo1/>
          <Rodillo2/>
          <Rodillo3/>
          <Rodillo4/>
          <Rodillo5/>

        </div>


        </div>
        {/*FIN COLUMNA QUE CONTIENE LOS RODILLOS */}

        {/*CONTENEDOR DE LA BOTONERA E INFORMACION */}
          <div class=' col-md-3 '>

          <Botonera/>
          
          </div>
        {/*FIN CONTENEDOR DE LA BOTONERA E INFORMACION */}
        
        

      </div>

      
      </>
 )
}
