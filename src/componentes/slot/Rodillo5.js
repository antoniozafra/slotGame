import React from 'react'

import uva from '../../images/uva.png'
import piña from '../../images/piña.png'
import sandia from '../../images/sandia.png'
import platano from '../../images/platano.png'

export const Rodillo5 = () => {
  return (


    <>
    <div >

        {/*RODILLO 5 */}
        <div className='rodillos ' id='rodillo6'>

            {/*CASILLA 13 */}
            <div className='mt-3 rodillo' id='casilla13' data-value="uva">
            <img src={uva} />
            </div>

            {/*CASILLA 14 */}
            <div className='mt-3 rodillo' id='casilla14' data-value="piña">
            <img src={piña}/>
            </div>
            

            {/*CASILLA 15 */}
            <div className='mt-3 rodillo' id='casilla15' data-value="platano">
            <img src={platano}/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
