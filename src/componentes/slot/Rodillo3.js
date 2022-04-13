import React from 'react'

import uva from '../../images/uva.png'
import piña from '../../images/piña.png'
import sandia from '../../images/sandia.png'
import platano from '../../images/platano.png'

export const Rodillo3 = () => {
  return (


    <>
    <div >

        {/*RODILLO 3 */}
        <div className='rodillos ' id='rodillo 3'>

            {/*CASILLA 1 */}
            <div className='mt-3 rodillo' id='casilla7' data-value="uva">
            <img src={uva} />
            </div>

            {/*CASILLA 2 */}
            <div className='mt-3 rodillo' id='casilla8' data-value="piña">
            <img src={piña}/>
            </div>
            

            {/*CASILLA 3 */}
            <div className='mt-3 rodillo' id='casilla9' data-value="platano">
            <img src={platano}/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
