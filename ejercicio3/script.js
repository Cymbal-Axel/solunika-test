function main(listaNumeros) {
    var sumasPares = 0;
    var sumasImpares = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    for (var i = 0; i < listaNumeros.length; i++) {
        var numero = listaNumeros[i];
        if (numero % 2 == 0) {
            sumasPares = sumasPares + numero;
            contadorPares++;
        } else {
            sumasImpares = sumasImpares + numero;
            contadorImpares++;
        }
    }

    var promedioPar = sumasPares / contadorPares;
    var promedioImpar = sumasImpares / contadorImpares;

    if (promedioPar > promedioImpar) {
        console.log("Es mayor el promedio par")
    } else if (promedioPar == promedioImpar) {
        console.log("Son iguales")
    } else {
        console.log("Es mayor el promedio impar")
    }

}
main([1, 4, 5, 2]);
main([3, 45, 9, 5]);