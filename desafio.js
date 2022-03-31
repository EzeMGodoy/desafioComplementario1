
/*
    ==== Desafio Complementario 1

    Se le pide al usuario que ingrese un número para elevearlo a ese número solicitado y generar una tabla.
    En caso de que el usario NO ingrese un número, se le vuelve a pedir que ingrese un número.
    Con ESC, finaliza el programa.

    Además agragué un comando que elimina los resultados impresos en consola, para que no haya acumulacion de datos.
*/

let num;


while (true) {
    num = prompt("Ingresa un numero de 1 a 5 que quieras elevar. \nPara detener escribe ESC");
    if (num == "ESC") {
        break;
    }

    num = parseInt(num);

    if (isNaN(num)) {
        alert("Eso no es un número. Por favor introduce un número del 1 al 5");
        continue;
    } 
    
    console.clear();

    
    if (num <= 5 && num > 0) {
        console.log(`\nTabla de potencias de ${num}`);
        
        let exp = 0;
        while ( exp <=4 ) {
            console.log(`${num}^${exp} = ${num**exp}`);
            exp++;
        };
        
    } else {
        alert("No has introducido un número entre 1 y 5.")
    }
    
}







