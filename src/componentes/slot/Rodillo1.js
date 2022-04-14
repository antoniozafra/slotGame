import React from 'react'


const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
const piña = 'https://images.vexels.com/media/users/3/230815/isolated/preview/96030310a657b507d8736c670bdd5b44-dibujos-animados-de-pina-feliz.png';
const platano = 'https://cdn3.iconfinder.com/data/icons/casino/256/Bananas-512.png';

export const Rodillo1 = () => {
  return (


    <>
    <div >

        {/*RODILLO 1 */}
        <div className='rodillos ' id='rodillo 1'>

            {/*CASILLA 1 */}
            <div className='mt-3 rodillo' id='casilla1' data-value="uva">
            <img src={uva} alt='Imagen de Uva' id="imagenCasilla1" />
            </div>

            {/*CASILLA 2 */}
            <div className='mt-3 rodillo' id='casilla2' data-value="piña">
            <img src={piña} id="imagenCasilla2"/>
            </div>
            

            {/*CASILLA 3 */}
            <div className='mt-3 rodillo' id='casilla3' data-value="platano">
            <img src={platano} id="imagenCasilla3"/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
