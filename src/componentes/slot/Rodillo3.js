import React from 'react'

const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
const piña = 'https://images.vexels.com/media/users/3/230815/isolated/preview/96030310a657b507d8736c670bdd5b44-dibujos-animados-de-pina-feliz.png';
const platano = 'https://cdn3.iconfinder.com/data/icons/casino/256/Bananas-512.png';

export const Rodillo3 = () => {
  return (


    <>
    <div >

        {/*RODILLO 3 */}
        <div className='rodillos ' id='rodillo 3'>

            {/*CASILLA 1 */}
            <div className='mt-3 rodillo' id='casilla7' data-value="uva">
            <img src={uva} id="imagenCasilla7"/>
            </div>

            {/*CASILLA 2 */}
            <div className='mt-3 rodillo' id='casilla8' data-value="piña">
            <img src={piña} id="imagenCasilla8"/>
            </div>
            

            {/*CASILLA 3 */}
            <div className='mt-3 rodillo' id='casilla9' data-value="platano">
            <img src={platano} id="imagenCasilla9"/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
