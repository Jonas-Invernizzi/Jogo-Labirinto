const player = document.getElementById("player")
const objetos = document.getElementsByClassName("objetos")
const Mensagem = document.getElementById("mensagem")
const venceux = document.getElementById("venceu")
const geral = document.getElementById("geral")
var moveis = false
player.addEventListener("mouseenter", (e) => {
    moveis = true
})
player.addEventListener("mouseleave", (e) => {
    moveis = false
})
var venceu = 0
var valorxoriginal = Number(player.getAttribute("x"))
var valoryoriginal = Number(player.getAttribute("y"))
player.addEventListener("mousemove", (e) => {
    if (!moveis) return;
    var x1 = Number(player.getAttribute("x"))
    var y1 = Number(player.getAttribute("y"))
    var width = Number(player.getAttribute("width"))
    var height = Number(player.getAttribute("height"))

    var x2 = x1 + width
    var y2 = y1 + height

    player.setAttribute('x', e.clientX - (width / 2))
    player.setAttribute('y', e.clientY - (height / 2))

    const vitoria = document.getElementById("vitoria")
    var xv1 = Number(vitoria.getAttribute("x"))
    var yv1 = Number(vitoria.getAttribute("y"))
    var he2 = Number(vitoria.getAttribute("height")) + yv1
    var wi2 = Number(vitoria.getAttribute("width")) + xv1
    for (const i of objetos) {
        var xi = Number(i.getAttribute("x"))
        var yi = Number(i.getAttribute("y"))
        var hi = Number(i.getAttribute("height")) + yi
        var wi = Number(i.getAttribute("width")) + xi
        if (y2 >= yi && hi >= y1 && wi >= x1 && x2 >= xi) {
            Mensagem.innerText = "Que pena, Você perdeu!😒"
            player.setAttribute('x', valorxoriginal)
            player.setAttribute('y', valoryoriginal)
            var x1 = Number(player.getAttribute("x"))
            var y1 = Number(player.getAttribute("y"))
            var width = Number(player.getAttribute("width"))
            var height = Number(player.getAttribute("height"))
        }
    }
    if (y2 >= yv1 && he2 >= y2 && wi2 >= x1 && x2 >= xv1) {
        player.setAttribute('x', valorxoriginal)
        player.setAttribute('y', valoryoriginal)
        var x1 = Number(player.getAttribute("x"))
        var y1 = Number(player.getAttribute("y"))
        var width = Number(player.getAttribute("width"))
        var height = Number(player.getAttribute("height"))
        venceu++
        venceux.innerText = "Você ganhou "+venceu+" vez(es)."
        Mensagem.innerText = "Parabéns, Você venceu!!!"
        
    }


})