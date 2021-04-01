function main(numero1, numero2, numero3) {
    var numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b);
    console.log("el menor es", numeros[0]);
    console.log("el del medio es", numeros[1]);
    console.log("el mayor es", numeros[2]);
}