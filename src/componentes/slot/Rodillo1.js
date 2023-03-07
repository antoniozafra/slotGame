import React from 'react'


const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
// cls




export const Rodillo1 = () => {
  return (


    <>
    <div >

        {/*RODILLO 1 */}
        <div className='rodillos' id='rodillo1'>

            {/*CASILLA 1 */}
            <div className='mt-3 rodillo' id='casilla1' data-value="uva">
            <img src={uva} alt='Imagen de Uva' id="imagenCasilla1" />
            </div>

            {/*CASILLA 2 */}
            <div className='mt-3 rodillo' id='casilla2' data-value="piña">
            <img src={uva} id="imagenCasilla2"/>
            </div>
            

            {/*CASILLA 3 */}
            <div className='mt-3 rodillo' id='casilla3' data-value="platano">
            <img src={uva} id="imagenCasilla3"/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
