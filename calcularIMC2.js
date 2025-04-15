function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);

    if (peso < 18.5){
        return "obesidad" + imc.toFixed(2);   
    }
    else if (peso >= 18.5 && peso <= 24.9){
        return "ligtero"+ imc.toFixed(2);
    }
    else if (peso >= 25 && peso <= 29.9){
        return "pesado"+ imc.toFixed(2);
    }
    else if (peso >= 30 && peso <= 39.9){
        return "el valor del IMC es:"+ imc.toFixed(2);
    }
    else{
        return "el valor del IMC es:"+ imc.toFixed(2);
    }
}
const peso = 80;
const altura = 1.55;
console.log(calcularIMC(peso, altura));