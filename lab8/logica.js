

function repetida(){
    var repetida = 1;
    var letras = [];
    var almacenar = [];

    let texto = document.getElementById("cadenita").value;
    
    texto = texto.toUpperCase().replace(/ /g, "").split("").sort();

    for(let i = 0; i < texto.length; i++){
            if(texto[i + 1] === texto[i] ){
                repetida ++;
            }else{
                letras.push(texto[i]);
                almacenar.push(repetida);
                repetida = 1;
            }
    }

    console.log(almacenar);
    console.log(letras);
    
}

