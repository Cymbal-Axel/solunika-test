function palindromes(a, b, c, d) {

    var numeros = [a, b, c, d];
    for (var i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] != "number") {
            console.log("No es un numero");
            continue;
        }
        var n = numeros[i].toString();
        if (n === n.split('').reverse().join('')) {
            console.log(n + " " + "es palindromo")
        } else {
            console.log(n + " " + "no es palindromo")
        }
    }
    console.log(numeros.sort(function(prev, next) {
        if (prev > next) {
            return 1;
        }
        if (prev < next) {
            return -1;
        }
        return 0;
    }));
}
palindromes(121, 353, 223, "cuatro")