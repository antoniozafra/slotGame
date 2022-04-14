import React from 'react'





export const GenerateRandomNumber = () => {

//RECOGEMOS EL VALOR DE LA APUESTA DEL USUARIO
const apuesta = Number(document.getElementById('valorApuesta').innerHTML);

//LE RESTAMOS DICHO VAALOR AL MONEDERO DEL USUARIO
const dinero = Number(document.getElementById('valorDinero').innerHTML);
document.getElementById("valorDinero").innerHTML = dinero - apuesta;






    /*VALORES MINIMOS Y MAXIMOS PARA EL NUMERO ALEATORIO */
const min = 1;
const max = 4;
let data = [];

for (let i = 0; i < 15; i++) {
    /*CREAMOS 15 NUMERO ALEATORIOS*/
    const newNumber = Math.ceil(Math.random() * (max-min));

    //LOS AÑADIMOS TODOS EN UN ARRAY
    data.push(newNumber);
}

  return comprobarPremios(data);
}



export const  comprobarPremios =  ( data) => {

// const casilla1 = document.getElementById("casilla1");
// const casilla2 = document.getElementById('casilla2').getAttribute('data-value');
// const casilla3 = document.getElementById('casilla3').getAttribute('data-value');
// const casilla4 = document.getElementById('casilla4').getAttribute('data-value');
// const casilla5 = document.getElementById('casilla5').getAttribute('data-value');
// const casilla6 = document.getElementById('casilla6').getAttribute('data-value');
// const casilla7 = document.getElementById('casilla7').getAttribute('data-value');
// const casilla8 = document.getElementById('casilla8').getAttribute('data-value');
// const casilla9 = document.getElementById('casilla9').getAttribute('data-value');
// const casilla10 = document.getElementById('casilla10').getAttribute('data-value');
// const casilla11 = document.getElementById('casilla11').getAttribute('data-value');
// const casilla12 = document.getElementById('casilla12').getAttribute('data-value');
// const casilla13 = document.getElementById('casilla13').getAttribute('data-value');
// const casilla14 = document.getElementById('casilla14').getAttribute('data-value');
// const casilla15 = document.getElementById('casilla15').getAttribute('data-value');

const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
const piña = 'https://images.vexels.com/media/users/3/230815/isolated/preview/96030310a657b507d8736c670bdd5b44-dibujos-animados-de-pina-feliz.png';
const platano = 'https://cdn3.iconfinder.com/data/icons/casino/256/Bananas-512.png';


for (let i = 0; i < data.length+1; i++) {
    if (data[i] == "1") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', uva);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms ";
        document.getElementById("imagenCasilla" + (i + 1 )).remove.animation = "onDisplay 500ms ";

    }
    if (data[i] == "2") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', piña);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms ";
    }
    if (data[i] == "3") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', platano);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }

}

//COMPROBACION DE PREMIO

devolverPremio(data);





    // if(data[0] === data[1] && data[0] === data[2] && data[0] === data[3]){
    //     alert('premio')
    // }




}


export const devolverPremio = (data) =>  {

   /*
        COMPROBAR PREMIO LINEA 4
        1 1 1 0 0
        0 0 0 0 0
        0 0 0 0 0
    
    */
       if(data[0] === data[3] && data[0] === data[6] ){

        alert('PREMIO LINEA 1')
    }


    // //COMPROBAR PREMIO LINEA 2
    // if(data[1] === data[4] && data[1] === data[7] ){
    //     alert('PREMIO LINEA 2')
    // }

    // //COMPROBAR PREMIO LINEA 3
    // if(data[2] === data[5] && data[2] === data[8] ){
    //     alert('PREMIO LINEA 3')
    // }

    /*
        COMPROBAR PREMIO LINEA 4

        1 0 0 0 1
        0 1 0 1 0
        0 0 1 0 0
    
    */
    if(data[0] === data[4] && data[0] === data[8]  && data[0] === data[10] && data[0] === data[12] ){
        alert('PREMIO LINEA 4')
    }

    //COMPROBAR PREMIO LINEA 5
    if(data[2] === data[4] && data[2] === data[6]  && data[2] === data[10] && data[2] === data[14] ){
        alert('PREMIO LINEA 5')
    }

    //COMPROBAR PREMIO LINEA6
    if(data[1] === data[5] && data[1] === data[7]  && data[1] === data[11] && data[1] === data[13] ){
        alert('PREMIO LINEA 6')
    }



}
