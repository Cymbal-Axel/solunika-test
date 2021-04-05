function palindromes(a, b, c, d) {

    var numeros = [a, b, c, d];
    for (var i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] != "number") {
            console.log("No es un numero");
            continue;
        }
        var n = numeros[i].toString();
        if (n === n.split('').reverse().join('')) {
            console.log("es palindromo")
        } else {
            console.log("no es palindromo")
        }

    }
}

palindromes(121, 223, 232, "cuatro");