function mudarTema() {

    const body = document.querySelector("body");
    
    const imgBtnTema = document.querySelector(".img-tema");
    const modoEscuroEstaAtivo = body.classList.contains("dark");

    body.classList.toggle("dark");

    if (modoEscuroEstaAtivo) {
        imgBtnTema.setAttribute("src", "./src/imgs/sun.png")
        imgBtnTema.setAttribute('alt', 'Imagem do Sol.')
    } else {
        imgBtnTema.setAttribute("src", "./src/imgs/moon.png");
        imgBtnTema.setAttribute('alt', 'Imagem da Lua.')
    }
}

function converterC_F() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.celsius-resultado')
    resultados.forEach(item => { 
        item.classList.remove('resultado-reveal-frio') 
        item.classList.remove('resultado-reveal-quente') 
    })

    document.getElementById("input-kelvin").value = ''
    document.getElementById("input-fahrenheit").value = ''

    const valorC = document.getElementById("input-celsius").value

    if (valorC == '') {
        window.alert("Insira um número.")
    } else {
        const valorF = (valorC * 1.8) + 32;

        if(valorF < 0) {
            resultado.classList.remove('resultado-reveal-quente')
            resultado.classList.add('resultado-reveal-frio')
            resultado.innerHTML = `Essa temperatura em Fahrenheit é:<br>${valorF.toFixed(1)} °F`
        } else {
            resultado.classList.remove('resultado-reveal-frio')
            resultado.classList.add('resultado-reveal-quente')
            resultado.innerHTML = `Essa temperatura em Fahrenheit é:<br>${valorF.toFixed(1)} °F`
        }  
    }
}
function converterC_K() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.celsius-resultado')
    resultados.forEach(item => { 
        item.classList.remove('resultado-reveal-frio') 
        item.classList.remove('resultado-reveal-quente') 
    })
 
    document.getElementById("input-kelvin").value = ''
    document.getElementById("input-fahrenheit").value = ''
 
    const valorC = document.getElementById("input-celsius").value

    if (valorC == '') {
        window.alert("Insira um número maior que 0.")
    } else {
        const valorK = parseInt(valorC) + 273.15

        if(valorK < 0) {
            resultado.classList.remove('resultado-reveal-quente')
            resultado.classList.add('resultado-reveal-frio')

            resultado.innerHTML = `Essa temperatura em Kelvin é:<br>${valorK.toFixed(2)} °K`
        } else {
            resultado.classList.remove('resultado-reveal-frio')
            resultado.classList.add('resultado-reveal-quente')
            
            resultado.innerHTML = `Essa temperatura em Kelvin é:<br>${valorK.toFixed(2)} °K`
        }
    }
}

function converterK_C() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.kelvin-resultado')
    resultados.forEach(item => { 
        item.classList.remove('resultado-reveal-frio') 
        item.classList.remove('resultado-reveal-quente') 
    })

    document.getElementById("input-celsius").value = ''
    document.getElementById("input-fahrenheit").value = ''

    const valorK = document.getElementById("input-kelvin").value

    if (valorK == '') {
        window.alert("Insira um número.")
    } else {
        const valorC = parseInt(valorK) - 273.15

        if(valorC < 0) {
            resultado.classList.remove('resultado-reveal-quente')
            resultado.classList.add('resultado-reveal-frio')
            resultado.innerHTML = `Essa temperatura em Celsius é:<br>${valorC.toFixed(2)} °C`
        } else {
            resultado.classList.remove('resultado-reveal-frio')
            resultado.classList.add('resultado-reveal-quente')
            resultado.innerHTML = `Essa temperatura em Celsius é:<br>${valorC.toFixed(2)} °C`
        }  
    }
}
function converterK_F() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.kelvin-resultado')
    resultados.forEach(item => { 
        item.classList.remove('resultado-reveal-frio') 
        item.classList.remove('resultado-reveal-quente') 
    })

    document.getElementById("input-celsius").value = ''
    document.getElementById("input-fahrenheit").value = ''

    const valorK = document.getElementById("input-kelvin").value

    if (valorK == '') {
        window.alert("Insira um número.")
    } else {
        const valorF = (valorK - 273.15) * 1.8 + 32

        if(valorF < 0) {
            resultado.classList.remove('resultado-reveal-quente')
            resultado.classList.add('resultado-reveal-frio')
            resultado.innerHTML = `Essa temperatura em Fahrenheit é:<br>${valorF.toFixed(2)} °F`
        } else {
            resultado.classList.remove('resultado-reveal-frio')
            resultado.classList.add('resultado-reveal-quente')
            resultado.innerHTML = `Essa temperatura em Fahrenheit é:<br>${valorF.toFixed(2)} °F`
        }  
    }
}

function converterF_K() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.fahrenheit-resultado')
    resultados.forEach(item => { 
        item.classList.remove('resultado-reveal-frio') 
        item.classList.remove('resultado-reveal-quente') 
    })

    document.getElementById("input-celsius").value = ''
    document.getElementById("input-kelvin").value = ''

    const valorF = document.getElementById("input-fahrenheit").value

    if (valorF == '') {
        window.alert("Insira um número.")
    } else {
        const valorK = (parseInt(valorF) + 459.67) / 1.8

        if(valorK < 0) {
            resultado.classList.remove('resultado-reveal-quente')
            resultado.classList.add('resultado-reveal-frio')
            resultado.innerHTML = `Essa temperatura em Kelvin é:<br>${valorK.toFixed(2)} °K`
        } else {
            resultado.classList.remove('resultado-reveal-frio')
            resultado.classList.add('resultado-reveal-quente')
            resultado.innerHTML = `Essa temperatura em Kelvin é:<br>${valorK.toFixed(2)} °K`
        }  
    }
}
function converterF_C() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.fahrenheit-resultado')
    resultados.forEach(item => { 
        item.classList.remove('resultado-reveal-frio') 
        item.classList.remove('resultado-reveal-quente') 
    })

    document.getElementById("input-celsius").value = ''
    document.getElementById("input-kelvin").value = ''

    const valorF = document.getElementById("input-fahrenheit").value

    if (valorF == '') {
        window.alert("Insira um número.")
    } else {
        const valorK = (valorF - 32) / 1.8

        if(valorK < 0) {
            resultado.classList.remove('resultado-reveal-quente')
            resultado.classList.add('resultado-reveal-frio')
            resultado.innerHTML = `Essa temperatura em Celsius é:<br>${valorK.toFixed(2)} °C`
        } else {
            resultado.classList.remove('resultado-reveal-frio')
            resultado.classList.add('resultado-reveal-quente')
            resultado.innerHTML = `Essa temperatura em Celsius é:<br>${valorK.toFixed(2)} °C`
        }  
    }
}