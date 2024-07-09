function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let saida = document.getElementById('saida')
    // 
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Digite todos os valores')
    } else {
        saida.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i <= f) {
            for (let c = i; c <=f; c += p) {
            saida.innerHTML += `${c} ➡️`
            }
        } else {
            for (let c = i; c >= f; c -= p)
            saida.innerHTML += `${c} ➡️`
        }
        saida.innerHTML +=`🚩`
        

    }
}