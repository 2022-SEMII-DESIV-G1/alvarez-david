let arreglo1 = [1];
let arreglo2 = [2, 3]; 
let arreglo3 = [4, 5, 6];
let arreglo4 = [7, 8, 9, 10];

let arreglo5 = [arreglo1, arreglo2, arreglo3, arreglo4];


//document.write(arreglo5);

//document.write("<p>" + arreglo5 + "</p>");

for(var i = 0; i<arreglo5.length; i++){

        console.log(""+arreglo5[i]);   
}


arreglo5.forEach((l, i) => {
    console.log( ""+arreglo5[i]);
});
//console.log(arreglo5)