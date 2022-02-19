

let texto = document.getElementById('txt');

const palabras = texto.ariaValueText





const arrayText = palabras.split(',')

console.log(arrayText)

const maquina = (arrayText, tiempo) => {

    let size = arrayText.length
    let contador = 0;
    let index = 0;
    let estado = true

    // arrayText.forEach(palabra => {


    setInterval(() => {


        if (contador < arrayText.length) {

            if (index < arrayText[contador].length && estado) {

               // console.log(arrayText[contador].slice(0, index + 1))

                texto.innerText = arrayText[contador].slice(0, index + 1)
                console.log(index)
                index++

                if (index > arrayText[contador].length - 1) {
                    console.log("entro aca")

                    
                    estado = false
                }



            }


            

            if (index > arrayText[contador].length - 1 || !estado) {
                //console.log(arrayText[contador].slice(index, index))
                //console.log(index)
                console.log(arrayText[contador].slice(0, index))
                texto.innerText =arrayText[contador].slice(0, index)
                console.log(index)
                index--

                if (index < 0) {                   
                    estado = true;
                    contador++;
                    index = 0;


                }


            }
        } else {
            contador = 0
        }

        console.log(contador)


    }, tiempo)


    //});

    // setInterval(()=>{
    //    console.log( arrayText[contador][0])

    //    arrayText[contador][0]


    //     

    //     contador++;


    //    },500) 


    //


    //  

}


maquina(arrayText,300)



