import React from 'react'

import uva from '../../images/uva.png'
import piña from '../../images/piña.png'
import sandia from '../../images/sandia.png'
import platano from '../../images/platano.png'

export const Rodillo4 = () => {
  return (


    <>
    <div >

        {/*RODILLO 4 */}
        <div className='rodillos ' id='rodillo4'>

            {/*CASILLA 10 */}
            <div className='mt-3 rodillo' id='casilla10' data-value="uva">
            <img src={uva} />
            </div>

            {/*CASILLA 11 */}
            <div className='mt-3 rodillo' id='casilla11' data-value="piña">
            <img src={piña}/>
            </div>
            

            {/*CASILLA 12 */}
            <div className='mt-3 rodillo' id='casilla12' data-value="platano">
            <img src={platano}/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
