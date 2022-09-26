// Botão limpar, recarrega a pagina
let btn = document.querySelector("#limpar");
btn.addEventListener("click", function Limpar() {
    location.reload();
});

// Evento 'Enter' chama a função Calcular()
window.addEventListener('keyup', (e) => {
    if (e.key == 'Enter'){
        Calcular()
    }
})


function Calcular() {
    let a1 = Number(document.getElementById('a1').value)
    let a2 = Number(document.getElementById('a2').value)
    let a3 = Number(document.getElementById('a3').value)
    let a4 = Number(document.getElementById('a4').value)
    let n2 = Number(document.getElementById('n2').value)
    let res = document.getElementById('res')
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')

    if(a1 == ''){
     return res2.innerHTML = `* Preencha todos os campos *`
    } else res2.innerHTML = ''

    let media = a1 + a2 + a3 + a4
    let somas = media / 4
    let total = (somas * 0.4) + (n2 * 0.6)

    res.innerHTML = ''
    res1.innerHTML = ''

    if (total >= 6) {
        res.innerHTML = 'Sua média final é: ' + total.toFixed(1) + '<br>' + 'APROVADO'
    } else {
        res1.innerHTML = 'Sua média final é: ' + total.toFixed(1) + '<br>' + 'REPROVADO'
    }    

}    

