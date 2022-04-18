import React from 'react'
import 'animate.css';
let valorPremio = 0;






export const GenerateRandomNumber = () => {

//DEJAMOS EL TITULO COMO ESTA
document.getElementById("titulo").innerHTML = "<h1>EL JUEGO DE LAS FRUTAS</h1>";


//RECOGEMOS EL VALOR DE LA APUESTA DEL USUARIO
const apuesta = Number(document.getElementById('valorApuesta').innerHTML);

//LE RESTAMOS DICHO VAALOR AL MONEDERO DEL USUARIO
const dinero = Number(document.getElementById('valorDinero').innerHTML);
document.getElementById("valorDinero").innerHTML = dinero - apuesta;






    /*VALORES MINIMOS Y MAXIMOS PARA EL NUMERO ALEATORIO */
const min = 1;
const max = 6;
let data = [];


//BUCLE DE CREACION DE LOS NUMEROS ALEATORIOS
for (let i = 0; i < 15; i++) {
    /*CREAMOS 15 NUMERO ALEATORIOS*/
    const newNumber = Math.ceil(Math.random() * (max-min));

    //LOS AÑADIMOS TODOS EN UN ARRAY
    data.push(newNumber);
}
console.log(data)

  return comprobarPremios(data);
}



export const  comprobarPremios =  ( data) => {



const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
const piña = 'https://images.vexels.com/media/users/3/230815/isolated/preview/96030310a657b507d8736c670bdd5b44-dibujos-animados-de-pina-feliz.png';
const platano = 'https://cdn3.iconfinder.com/data/icons/casino/256/Bananas-512.png';
const limon = 'https://cdn-icons.flaticon.com/png/512/4056/premium/4056931.png?token=exp=1650305603~hmac=0a6a66e16edfa219a071fb5d026521b9';
const sandia = 'https://cdn-icons-png.flaticon.com/512/874/874997.png';


//RECORREMOS TODAS LAS CASILLAS Y LE ASIGNAMOS LA IMAGEN
for (let i = 0; i < data.length+1; i++) {
    if (data[i] == "1") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', uva);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms ";


    }
    if (data[i] == "2") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', piña);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms ";
    }
    if (data[i] == "3") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', platano);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }

    if (data[i] == "4") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', limon);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }

    if (data[i] == "5") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', sandia);
        document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }
}

//COMPROBACION DE PREMIO
// const pruebaData= [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

devolverPremio(data);


}


export const devolverPremio = (data) =>  {

   /*
        COMPROBAR PREMIO LINEA 1
        1 1 1  0
        0 0 0 0 0
        0 0 0 0 0
    
    */
       if(data[0] === data[3] && data[0] === data[6] ){



        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio = 1;
            
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio = 2;


        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio=3;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio=5;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio=10;
        }


       

       

        
    }






    // //COMPROBAR PREMIO LINEA 2
    // if(data[1] === data[4] && data[1] === data[7] ){

    //     alert('PREMIO LINEA 2')
        
        
    //     /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
    //     // document.getElementById("imagenCasilla2").style.border = "10px  solid green";
    //     document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

    //     /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
    //     // document.getElementById("imagenCasilla5").style.border = "10px  solid green";
    //     document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

    //     /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
    //     // document.getElementById("imagenCasilla8").style.border = "10px  solid green";
    //     document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite";  
    // }

    // //COMPROBAR PREMIO LINEA 3
    // if(data[2] === data[5] && data[2] === data[8] ){
    //     alert('PREMIO LINEA 3')
    // }

 
    // if(data[0] === data[4] && data[0] === data[8]  && data[0] === data[10] && data[0] === data[12] ){
    //     alert('PREMIO LINEA 4')
    // }

    // //COMPROBAR PREMIO LINEA 5
    // if(data[2] === data[4] && data[2] === data[6]  && data[2] === data[10] && data[2] === data[14] ){
    //     alert('PREMIO LINEA 5')
    // }

    // //COMPROBAR PREMIO LINEA6
    // if(data[0] === data[3] && data[0] === data[7]  && data[0] === data[9] && data[0] === data[12] ){
    //     alert('PREMIO LINEA 6')
    // }



    // //COMPROBAR PREMIO LINEA7
    // if(data[2] === data[5] && data[2] === data[7]  && data[2] === data[11] && data[2] === data[14] ){
    //     alert('PREMIO LINEA 7')
    // }

    // //COMPROBAR PREMIO LINEA8
    // if(data[1] === data[5] && data[1] === data[8]  && data[1] === data[11] && data[2] === data[13] ){
    //     alert('PREMIO LINEA 8')
    // }


    //ACTUALIZAMOS EL TITULO DE LA WEB CON EL PREMIO TOTAL, Y LA CASILLA VALOR PREMIO
    document.getElementById("casillaPremio").innerHTML = `<h3>PREMIO</h3><span>${valorPremio} €</span>`;
    document.getElementById("titulo").innerHTML = `<h1>PREMIO ${valorPremio}€</h1>`;

    //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
    const dinero = Number(document.getElementById('valorDinero').innerHTML);
    document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 
    // valorPremio=0;


    
    /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
    document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

    /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
    document.getElementById("imagenCasilla4").style.animation = " premio 2s infinite";  

    /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
    document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite";  




       }

    
