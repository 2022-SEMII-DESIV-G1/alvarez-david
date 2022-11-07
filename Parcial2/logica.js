let arreglo =[ 
    [75],
    [95, 64], 
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]]; 
    

    let prueba = [ [1],
    [2,3],
    [4,5,6]];
    
    let suma = 0;
    let suma2 = 0;
    let a = 0;
   

    /*
    for(var i = 0; i<arreglo.length; i++){ 
        
        for(var k = i; k < 15; ++k){
            document.write("\n");
        }
        document.write("["+arreglo[i]+"]");
    
        document.write("<br>")
    } */

    for(var i = 0; i <=14; i++){
        for(var j = 0; j <= a; j++){
            document.getElementById('result').innerHTML += "["+ arreglo[i][j]+"]";
        }
        document.getElementById('result').innerHTML += "<p>"+"</p>";
        a=a+1;
    }
    
    var acum = 0;
    for(var i = 0; i<15; i++){    
        
        acum += arreglo[i][0];
    }
    
    for(var i = 0; i<15; i++){    
        
        suma+= arreglo[i][i];
    } 
    
    
    
    console.log(acum);
    console.log(suma);
    console.log(suma2);