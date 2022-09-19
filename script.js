/*let a1 = document.getElementById('a1').value
let a2 = document.getElementById('a2').value
let a3 = document.getElementById('a3').value
let a4 = document.getElementById('a4').value
let n2 = document.getElementById('n2').value
let res = document.getElementById('res')*/

function Calcular() {
    let a1 = Number(document.getElementById('a1').value)
    let a2 = Number(document.getElementById('a2').value)
    let a3 = Number(document.getElementById('a3').value)
    let a4 = Number(document.getElementById('a4').value)
    let n2 = Number(document.getElementById('n2').value)
    let res = document.getElementById('res')
    let res1 = document.getElementById('res1')


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

