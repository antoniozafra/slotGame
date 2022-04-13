import React from 'react'







export const GenerateRandomNumber = () => {
    /*VALORES MINIMOS Y MAXIMOS PARA EL NUMERO ALEATORIO */
const min = 1;
const max = 5;
let data = [];

for (let i = 0; i < 15; i++) {
    /*CREAMOS 15 NUMERO ALEATORIOS*/
    const newNumber = Math.ceil(Math.random() * (max-min));

    //LOS AÑADIMOS TODOS EN UN ARRAY
    data.push(newNumber);
    
}

  return comprobarPremios(data);
}



export const  comprobarPremios = ( data) => {

const casilla1 = document.getElementById('casilla1').getAttribute('data-value');
const casilla2 = document.getElementById('casilla2').getAttribute('data-value');
const casilla3 = document.getElementById('casilla3').getAttribute('data-value');
const casilla4 = document.getElementById('casilla4').getAttribute('data-value');
const casilla5 = document.getElementById('casilla5').getAttribute('data-value');
const casilla6 = document.getElementById('casilla6').getAttribute('data-value');
const casilla7 = document.getElementById('casilla7').getAttribute('data-value');
const casilla8 = document.getElementById('casilla8').getAttribute('data-value');
const casilla9 = document.getElementById('casilla9').getAttribute('data-value');
const casilla10 = document.getElementById('casilla10').getAttribute('data-value');
const casilla11 = document.getElementById('casilla11').getAttribute('data-value');
const casilla12 = document.getElementById('casilla12').getAttribute('data-value');
const casilla13 = document.getElementById('casilla13').getAttribute('data-value');
const casilla14 = document.getElementById('casilla14').getAttribute('data-value');
const casilla15 = document.getElementById('casilla15').getAttribute('data-value');

/*EJEMPLO DE LA MATRIZ 
0,0,0,0,0
0,0,0,0,0
0,0,0,0,0,

*/



console.log(data[0],data[1], data[2], data[3])

    if(data[0] === data[1] && data[0] === data[2] && data[0] === data[3]){
        alert('premio')
    }
    



}
