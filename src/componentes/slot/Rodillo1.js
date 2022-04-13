import React from 'react'

import uva from '../../img/uva.png'
import piña from '../../img/piña.png'
import sandia from '../../img/sandia.png'
import platano from '../../img/platano.png'

export const Rodillo1 = () => {
  return (


    <>
    <div >

        {/*RODILLO 1 */}
        <div className='rodillos' id='rodillo 1'>

            {/*CASILLA 1 */}
            <div className='mt-3 rodillo' id='casilla1' data-value="uva">
            <img src={uva} />
            </div>

            {/*CASILLA 2 */}
            <div className='mt-3 rodillo' id='casilla2'>
            <img src={piña}/>
            </div>
            

            {/*CASILLA 3 */}
            <div className='mt-3 rodillo' id='casilla3'>
            <img src={platano}/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
