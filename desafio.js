
/*
    ==== Desafio Complementario 1

    Se le pide al usuario que ingrese un número (a)
    Luego se le pide al usuario otro numero (b), que será el exponente del numero (a).
    En caso de que el usario NO ingrese un número, se le vuelve a pedir la operacion.

    Con ESC, finaliza el programa.

    Además agragué un comando que elimina los resultados impresos en consola, para que no haya acumulacion de datos.

    EL RESULTADO SE MUESTRA POR CONSOLA
*/

let num;
let exp = 0;

while (true) {
    num = prompt("Ingresa un numero de 1 a 5 que quieras elevar \nPara cerrar la calculadora escribe ESC");
    if (num == "ESC") {
        break;
    }

    num = parseInt(num);

    if (isNaN(num)) {
        alert("ERROR \nEso no es un número. \nPor favor introduce un número del 1 al 5");
        continue;
    } 
    
    console.clear();

    
    if (num <= 5 && num > 0) {
        exp = prompt("Ingresa el exponente. Debe ser positivo y entero");
        exp = parseInt(exp);
        
        if (isNaN(exp) || exp < 0) {
            alert("ERROR \nAsegurate de escribir un número ENTERO y mayor a 0.")
            // Como hago para para que me vuelva a preguntar esta sentencia y no toda desde el principio
        } else {
            console.log(`BASE ELEGIDA: ${num}\nPOTENCIA ELEGIDA ${exp}`);
            console.log(`${num}^${exp} = ${num**exp}`);
            exp++;
        }

        
        
    } else {
        alert("No has introducido un número entre 1 y 5.")
    }
    
}







