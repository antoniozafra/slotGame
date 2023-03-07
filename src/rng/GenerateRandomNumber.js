import React from 'react'
import 'animate.css';






export const GenerateRandomNumber = () => {

//DEJAMOS EL TITULO COMO ESTA
// document.getElementById("titulo").innerHTML = "<h1>EL JUEGO DE LAS FRUTAS</h1>";


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



export const  comprobarPremios =  (data) => {

const uva = 'https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9-icono-de-racimo-de-uvas.png';
const piña = 'https://images.vexels.com/media/users/3/230815/isolated/preview/96030310a657b507d8736c670bdd5b44-dibujos-animados-de-pina-feliz.png';
const platano = 'https://cdn3.iconfinder.com/data/icons/casino/256/Bananas-512.png';
const limon = 'https://cdn-icons-png.flaticon.com/512/2634/2634742.png';
const sandia = 'https://cdn-icons-png.flaticon.com/512/874/874997.png';

// data =[5,1,2,3,4,5,5,1,2,3,4,5,5,2,3];

//RECORREMOS TODAS LAS CASILLAS Y LE ASIGNAMOS LA IMAGEN
for (let i = 0; i < data.length+1; i++) {
    if (data[i] == "1") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', uva);
        // document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms ";


    }
    if (data[i] == "2") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', piña);
        // document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms ";
    }
    if (data[i] == "3") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', platano);
        // document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }

    if (data[i] == "4") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', limon);
        // document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }

    if (data[i] == "5") {
        document.getElementById("imagenCasilla" + (i + 1 )).setAttribute('src', sandia);
        // document.getElementById("imagenCasilla" + (i + 1 )).style.animation = "onDisplay 500ms  ";
    }
}




devolverPremio(data);


}


export const devolverPremio = (data) =>  {

    let valorPremio = 0;


    /*
    VALOR DE LOS PREMIOS
    uva{
        x3->1
        x4->2
        X5->4
    }
    piña{
        x3->1
        x4->2
        X5->4
    }
    
    platano{
        x3->2
        x4->3
        X5->5
    }
    
    limon{
        x3->2
        x4->3
        X5->5
    }
    
    sandia{
        x3->3
        x4->5
        X5->10
    }

    
    */

    
     /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 1
     -----------------------------------------------------------------------------------------------------------*/
       if(data[0] === data[3] && data[0] === data[6] ){
        alert("PREMIO LINEA 1")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 1;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 1;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 2;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 2;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 3;
        }

    //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
    const dinero = Number(document.getElementById('valorDinero').innerHTML);
    document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 10s "; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla4").style.animation = " premio 10s ";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 10s "; 
    }





    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 2
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[4] && data[1] === data[7] ){
        alert("PREMIO LINEA 2")

        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[1] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 1;
        }
        else if(data[1] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 1;
        }else if(data[1] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 2 ;
        }else if(data[1] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 2;
        }else if(data[1] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 3 ;
        }

    //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
    const dinero = Number(document.getElementById('valorDinero').innerHTML);
    document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 
    }





    /*-----------------------------------------------------------------------------------------------------------
                                  COMPROBACION DE PREMIOS EN LA LINEA 3
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[5] && data[2] === data[8] ){
        alert("PREMIO LINEA 3")
  

        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[2] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 1;
        }
        else if(data[2] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 1;
        }else if(data[2] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 2;
        }else if(data[2] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 2;
        }else if(data[2] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 3;
        }

    //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
    const dinero = Number(document.getElementById('valorDinero').innerHTML);
    document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla6").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla9").style.animation = " premio 2s infinite"; 
    }




    
    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 4
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[3] && data[0] === data[6] && data[0] === data[9] && data[0] === data[12] ){
        alert("PREMIO LINEA 4")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
    const dinero = Number(document.getElementById('valorDinero').innerHTML);
    document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla4").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla10").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }




        
    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 5
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[4] && data[1] === data[7] && data[1] === data[10] && data[1] === data[13] ){
        alert("PREMIO LINEA 5")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
    const dinero = Number(document.getElementById('valorDinero').innerHTML);
    document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }


           /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 6
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[5] && data[2] === data[8] && data[2] === data[11] && data[2] === data[14] ){
        alert("PREMIO LINEA 6")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 7
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[4] && data[0] === data[8] && data[0] === data[10] && data[0] === data[12] ){
        alert("PREMIO LINEA 7")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla9").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 8
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[4] && data[2] === data[6] && data[2] === data[10] && data[2] === data[14] ){
        alert("PREMIO LINEA 8")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla15").style.animation = " premio 2s infinite"; 

        
    }




      /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 9
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[3] && data[0] === data[7] && data[0] === data[9] && data[0] === data[12] ){
        alert("PREMIO LINEA 9")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla4").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla10").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }


      /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 10
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[5] && data[2] === data[7] && data[2] === data[11] && data[2] === data[14] ){
        alert("PREMIO LINEA 10")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla6").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla12").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla15").style.animation = " premio 2s infinite"; 

        
    }


     /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 11
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[5] && data[1] === data[8] && data[1] === data[11] && data[1] === data[13] ){
        alert("PREMIO LINEA 11")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla6").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla9").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla12").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }

     /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 12
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[3] && data[1] === data[6] && data[1] === data[9] && data[1] === data[13] ){
        alert("PREMIO LINEA 12")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla4").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla10").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }





    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 13
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[3] && data[1] === data[7] && data[1] === data[9] && data[1] === data[13] ){
        alert("PREMIO LINEA 13")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla4").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla10").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 14
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[5] && data[1] === data[7] && data[1] === data[11] && data[1] === data[13] ){
        alert("PREMIO LINEA 14")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla6").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla12").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 15
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[4] && data[0] === data[6] && data[0] === data[10] && data[0] === data[12] ){
        alert("PREMIO LINEA 15")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }



     /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 16
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[4] && data[2] === data[8] && data[2] === data[10] && data[2] === data[14] ){
        alert("PREMIO LINEA 16")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla9").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla15").style.animation = " premio 2s infinite"; 

        
    }




    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 17
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[4] && data[1] === data[6] && data[1] === data[10] && data[1] === data[13] ){
        alert("PREMIO LINEA 17")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 18
    -----------------------------------------------------------------------------------------------------------*/
    if(data[1] === data[4] && data[1] === data[8] && data[1] === data[10] && data[1] === data[13] ){
        alert("PREMIO LINEA 18")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla2").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla9").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla14").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 19
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[4] && data[0] === data[7] && data[0] === data[10] && data[0] === data[12] ){
        alert("PREMIO LINEA 19")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }


    
    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 20
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[4] && data[2] === data[7] && data[2] === data[10] && data[2] === data[14] ){
        alert("PREMIO LINEA 20")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla8").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla11").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla15").style.animation = " premio 2s infinite"; 

        
    }


        
    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 21
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[4] && data[0] === data[8] && data[0] === data[11] && data[0] === data[14] ){
        // alert("PREMIO LINEA 21")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla9").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla12").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla15").style.animation = " premio 2s infinite"; 

        
    }



    /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 22
    -----------------------------------------------------------------------------------------------------------*/
    if(data[2] === data[4] && data[2] === data[6] && data[2] === data[9] && data[2] === data[12] ){
        alert("PREMIO LINEA 22")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla3").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla5").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla10").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }



         /*-----------------------------------------------------------------------------------------------------------
                                COMPROBACION DE PREMIOS EN LA LINEA 23
    -----------------------------------------------------------------------------------------------------------*/
    if(data[0] === data[5] && data[0] === data[6] && data[0] === data[11] && data[0] === data[12] ){
        alert("PREMIO LINEA 21")


        //COMPROBAMOS QUE TIPO DE FIGURA ES LA QUE HA DADO PREMIO Y APLICAMOS EL PREMIO CORRESPONDIENTE
        if(data[0] == "1"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }
        else if(data[0] == "2"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 5;
        }else if(data[0] == "3"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "4"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 10;
        }else if(data[0] == "5"){
            //ANUNCIAMOS EL PREMIO
            valorPremio += 12;
        }

    


        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla1").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla6").style.animation = " premio 2s infinite";  

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla7").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla12").style.animation = " premio 2s infinite"; 

        /*ANIMACION DE LAS CASIILLAS DEL PREMIO */
        document.getElementById("imagenCasilla13").style.animation = " premio 2s infinite"; 

        
    }







    //ACTUALIZAMOS EL TITULO DE LA WEB CON EL PREMIO TOTAL, Y LA CASILLA VALOR PREMIO
    document.getElementById("casillaPremio").innerHTML = `<h3>PREMIO</h3><span>${valorPremio} €</span>`;
    document.getElementById("titulo").innerHTML = `<h1>PREMIO ${valorPremio}€</h1>`;

//   //ACTUALIZAMOS EL VALOR DEL DINERO DEL USUARIO
//   const dinero = Number(document.getElementById('valorDinero').innerHTML);
//   document.getElementById("valorDinero").innerHTML = dinero + valorPremio; 


    
    




       }

    
