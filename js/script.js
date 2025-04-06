const input = document.getElementById('radio1').checked = true
let cont = 1

function radio() {
    cont++
    if (cont > 6) {
        cont = 1
    }
    const slide = document.getElementById('radio' + cont).checked = true
}

setInterval(radio, 3000)



// MENU RESPONSIVEL
const abrirMenu = document.querySelector('.abrir-menu')
const fecharMenu = document.querySelector('.menu-fechar')
const containerMenu = document.querySelector('.container-menu')
const navMenu = document.querySelector('.nav-menu')

abrirMenu.addEventListener("click", () => {
    containerMenu.classList.add('efect')
})

fecharMenu.addEventListener("click", () => {
    containerMenu.classList.remove('efect')
})

navMenu.addEventListener("click", () => {
    containerMenu.classList.remove('efect')
})