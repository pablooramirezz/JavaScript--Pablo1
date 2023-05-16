function areaTriangulo (base, altura) {
    if (isNaN(base) || isNaN(altura))
    throw new Error("La base o altura no son números válidos.");
    
    if (base<0 || altura<0)
    throw new Error("La base o altura son negativos");

    return base * altura / 2;
}

try {
    area = areaTriangulo(2, -3);
    console.log('El área es: ',area);
}catch (ex) {
    console.log(ex.message);
    area = 0;
    console.log('El área es: ',area);
}
