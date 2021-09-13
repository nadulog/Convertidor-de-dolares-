function cambiarDolares() {
    let dolarHoy = 97.25
    let impuestoPais
    let descuentoGanancias
    let valorTotal
    let ingresoPesos=document.getElementById("pesos").value
    
    
    resultado = ingresoPesos / dolarHoy
    impuestoPais = ingresoPesos * 0.3
    descuentoGanancias = ingresoPesos * 0.35
    valorTotal = parseFloat(ingresoPesos) + parseFloat(impuestoPais) + parseFloat(descuentoGanancias)

    let input = document.getElementById("pesos");
    input.addEventListener('input', function () {
        if (this.value.length > 10)
        {
            this.value = this.value.slice(0,10)
            }
    })
    
    if (ingresoPesos < 0)
    {
        ingresoPesos * (-1)
        alert("Por favor, no ingreses números negativos.")
    }
    
    if (resultado <= 0) {
        resultado * (-1)
    } else if (resultado > 6000) {
        alert('no se puede cambiar mas de 6000')
    } else {
    alert('$' + ingresoPesos + ' pesos argentinos son U$S' + resultado.toFixed(3) + '\n' + 
    'El impuesto país es de: $' + impuestoPais.toFixed(2) + '\n' + 'El recargo impositivo es de: $' + descuentoGanancias.toFixed(2) + '\n' + 'El total a pagar por U$S' + resultado.toFixed(2) + ' es de $' + valorTotal.toFixed(2));
    }
    

}
