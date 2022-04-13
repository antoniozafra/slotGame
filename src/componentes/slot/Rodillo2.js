import React from 'react'

import uva from '../../images/uva.png'
import piña from '../../images/piña.png'
import sandia from '../../images/sandia.png'
import platano from '../../images/platano.png'

export const Rodillo2 = () => {
  return (


    <>
    <div >

        {/*RODILLO 2 */}
        <div className='rodillos ' id='rodillo 1'>

            {/*CASILLA 4 */}
            <div className='mt-3 rodillo' id='casilla4' data-value="uva">
            <img src={uva} />
            </div>

            {/*CASILLA 5 */}
            <div className='mt-3 rodillo' id='casilla5' data-value="piña">
            <img src={piña}/>
            </div>
            

            {/*CASILLA 6 */}
            <div className='mt-3 rodillo' id='casilla6' data-value="platano">
            <img src={platano}/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
