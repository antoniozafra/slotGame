import React from 'react'

import uva from '../../images/uva.png'
import piña from '../../images/piña.png'
import sandia from '../../images/sandia.png'
import platano from '../../images/platano.png'

export const Rodillo1 = () => {
  return (


    <>
    <div >

        {/*RODILLO 1 */}
        <div className='rodillos ' id='rodillo 1'>

            {/*CASILLA 1 */}
            <div className='mt-3 rodillo' id='casilla1' data-value="uva">
            <img src={uva} />
            </div>

            {/*CASILLA 2 */}
            <div className='mt-3 rodillo' id='casilla2' data-value="piña">
            <img src={piña}/>
            </div>
            

            {/*CASILLA 3 */}
            <div className='mt-3 rodillo' id='casilla3' data-value="platano">
            <img src={platano}/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
