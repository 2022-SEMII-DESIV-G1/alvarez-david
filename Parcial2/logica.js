function calcular(){

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
 
    let a = 0;

    for(var i = 0; i <=14; i++){
        for(var j = 0; j <= a; j++){
            document.getElementById('result').innerHTML += "["+ arreglo[i][j]+"]";
        }
        document.getElementById('result').innerHTML += "<div>"+"</div>";
        a=a+1;
    }

        let suma = 0;
        let suma2 = 0;
        

        var acum = 0;
        for(var i = 0; i<15; i++){    
        
        acum += arreglo[i][0];
        }
    
        for(var i = 0; i<15; i++){    
        
        suma+= arreglo[i][i];
        } 
        
        let arreglo2 = [acum,suma];
        console.log(arreglo2);

        var gg = 0;

        for(var i = 0; i<arreglo2.length; i++){
            if(arreglo2[0] > arreglo2[1]){
                gg = arreglo2[0];
            }else{
                gg = arreglo2[1];
            }
        }

        document.getElementById('resultado').innerHTML +="La ruta mayor es: "+ "["+ gg +"]";
    }