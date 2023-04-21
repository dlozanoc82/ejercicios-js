import {
    suma, 
    areaRectangulo, 
    notaSemestre, 
    areaCircunferencia, 
    areaTerreno, 
    areaCono, 
    calcularDistancia, 
    convertirAMetros,
    calcularPagoAlberca} from "./src/js/main.js";

//Suma dos numeros
const btnSuma = document.querySelector('#sumar');
btnSuma.addEventListener('click', sumar)

function sumar() {
    const n1 = parseInt(prompt('Ingresa el Primer Numero'));
    const n2 = parseInt(prompt('Ingresa el Primer Numero'));
    
    const resultado = suma(n1,n2);
    alert(`La suma es: ${resultado}`)

}

//Area de un triangulo
const btnAreaRectangulo = document.querySelector('#areaRectangulo');
btnAreaRectangulo.addEventListener('click', areaRectangulos);

function areaRectangulos(){
    const base = parseInt(prompt('Ingresa la Base'));
    const altura = parseInt(prompt('Ingresa la Altura'));

    const resultado = areaRectangulo(base, altura);
    alert(`El area del Rectangulo es: ${resultado}`)
}


//Notas del Semestres 
const btnNotasSemestre = document.querySelector('#notasSemestre');
btnNotasSemestre.addEventListener('click', notaFinal);

function notaFinal() {
    const corte1 = parseInt(prompt('Ingresa la nota del primer corte'));
    const corte2= parseInt(prompt('Ingresa la del segundo corte'));
    const corte3= parseInt(prompt('Ingresa la del tercer corte'));

    const resultado = notaSemestre(corte1, corte2, corte3);
    alert(`Su nota del semestre es: ${resultado}`)
}


// Area de una circunferencia
const btnAreaCirculo = document.querySelector('#areaCirculo');
btnAreaCirculo.addEventListener('click', areaCirculos);

function areaCirculos() {
    const radio = parseInt(prompt('Ingresa el radio del circulo'));
    const resultado  = areaCircunferencia(radio);
    alert(`Su nota del semestre es: ${resultado}`);
}


//Medida Terrenos
const btnAreaTerreno = document.querySelector('#areaTerreno');
btnAreaTerreno.addEventListener('click', areaTerrenos);

function areaTerrenos() {
    const A = parseInt(prompt('Medida del terreno lado A'));
    const B = parseInt(prompt('Medida del terreno lado B'));
    const C = parseInt(prompt('Medida del terreno lado C'));
    
    const resultado  = areaTerreno(A, B, C);
    alert(`El area del terreno es: ${resultado}`);
}


//Area de la figura 2.3
const btnAreaTerrenoCono = document.querySelector('#areaCono');
btnAreaTerrenoCono.addEventListener('click', areaConos);

function areaConos() {
    const h = parseInt(prompt('Escriba la medida de la hipotenusa'));
    const r = parseInt(prompt('Escriba la medida del radio'));

    const resultado  = areaCono(h, r);
    alert(`El area del terreno comprado por la piloto es: ${resultado}`);
}


//Distancia entre dos puntos
const btnPlanoDistancia = document.querySelector('#planoDistancia');
btnPlanoDistancia.addEventListener('click', distanciaPlano);

function distanciaPlano() {
    const x1 = parseInt(prompt('Ingresa el valor X1'));
    const y1 = parseInt(prompt('Ingresa el valor Y1'));
    const x2 = parseInt(prompt('Ingresa el valor X2'));
    const y2 = parseInt(prompt('Ingresa el valor Y2'));

    const resultado  = calcularDistancia(x1,y1,x2,y2);
    alert(`La distancia entre el punto (${x1}, ${y1}) y (${x2}, ${y2}) es: ${resultado}`);

}


// Ejercicio - Telas
const btnConvertirMetros = document.querySelector('#convertirMetros');
btnConvertirMetros.addEventListener('click', convertirMetros)

function convertirMetros() {
    const metros = prompt("Ingresa la cantidad de metros de tela que necesitas:");
    const pulgadas = convertirAMetros(metros);
    alert("Si necesitas "+ metros + " metros equivalen a " + pulgadas + " pulgadas de tela que debes encargar")
}


// Ejercicio - Alberca
const btnAlberca = document.querySelector('#alberca');
btnAlberca.addEventListener('click', consumoAgua);

function consumoAgua() {
    const altura = prompt("Ingresa la altura de la alberca en metros:");
    const largo = prompt("Ingresa el largo de la alberca en metros:");
    const ancho = prompt("Ingresa el ancho de la alberca en metros:");
    const costoMetroCubico = prompt("Ingresa el costo del metro cúbico de agua:");
    const cantidadAlbercas = prompt("Ingresa la cantidad de albercas que deseas llenar:");

    const pagoTotal = calcularPagoAlberca(altura, largo, ancho, costoMetroCubico, cantidadAlbercas);

    alert("El pago total por llenar " + cantidadAlbercas + " alberca(s) de " + altura + " metros de altura, " + largo + " metros de largo y " + ancho + " metros de ancho es de $" + pagoTotal + ".");

}

