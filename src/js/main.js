const suma = ( a, b) => {
    console.log(a+b);
    return a+b;
}

const areaRectangulo = ( base, altura) =>{
    console.log(base*altura);
    return base*altura;
}

const notaSemestre = (corte1, corte2, corte3) => {
    return 0.3*corte1 + 0.3*corte2 +  0.4*corte3;
}

const areaCircunferencia = (radio) => {
    return (radio**2)*Math.PI.toFixed(4);
}

const areaTerreno = (a,b,c) =>{
    const at = (b*(a-c))/2;
    const ar = areaRectangulo(b,c);
    return at + ar;
}

const areaCono = (h,r) =>{
    //h2 = r2 + b2
    const altura = Math.sqrt( (h**2)+(r**2) );
    const areaTriangulo = 2*((r*altura)/2)
    const areaCirculo = (areaCircunferencia(r)) / 2;

    return areaTriangulo + areaCirculo;

}

const calcularDistancia = (X1, Y1, X2, Y2) => {
    const distancia = Math.sqrt(Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2));
    return distancia;
}

const convertirAMetros = (metros) => {
    const pulgadas = metros / 0.0254;
    return pulgadas;
}

const calcularPagoAlberca = (alto, largo, ancho, costoMetroCubico, cantidadAlbercas) => {
    const volumen = alto * largo * ancho;
    const totalMetroCubico = volumen * cantidadAlbercas;
    const pago = totalMetroCubico * costoMetroCubico;
    return pago;
}


export {
    suma,
    areaRectangulo,
    notaSemestre,
    areaCircunferencia,
    areaTerreno,
    areaCono,
    calcularDistancia,
    convertirAMetros,
    calcularPagoAlberca
};