import React from 'react'

const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
const piña = 'https://images.vexels.com/media/users/3/230815/isolated/preview/96030310a657b507d8736c670bdd5b44-dibujos-animados-de-pina-feliz.png';
const platano = 'https://cdn3.iconfinder.com/data/icons/casino/256/Bananas-512.png';
const limon = 'https://cdn-icons-png.flaticon.com/512/2634/2634742.png';
const sandia = 'https://cdn-icons-png.flaticon.com/512/874/874997.png';


export const Rodillo2 = () => {
  return (


    <>
    <div >

        {/*RODILLO 2 */}
        <div className='rodillos ' id='rodillo2'>

            {/*CASILLA 4 */}
            <div className='mt-3 casilla' id='casilla4' data-value="uva">
            <img src={piña} id="imagenCasilla4"/>
            </div>

            {/*CASILLA 5 */}
            <div className='mt-3 casilla' id='casilla5' data-value="piña">
            <img src={piña} id="imagenCasilla5"/>
            </div>
            

            {/*CASILLA 6 */}
            <div className='mt-3 casilla' id='casilla6' data-value="platano">
            <img src={piña} id="imagenCasilla6"/>
            </div>
            
            

        </div>
        

    </div>
    
    
    </>
  )
}
