
function carregar(){

var agora = new Date()
var hora = agora.getHours()
var hr = window.document.getElementById("p-div")
var msg = window.document.getElementById("saud")
var bd = window.document.getElementById("body")
var img = window.document.getElementById("imagem")
hr.innerHTML = `Agora são ${hora} horas`

if(hora < 12){
    msg.innerHTML = "Bom Dia!!"
    bd.style.backgroundColor = "rgb(255, 224, 48)"
    img.src = 'imagens/img-dia.png'
    
} else if (hora >= 12 && hora < 18 ){
    msg.innerHTML = "Boa Tarde!!"
    bd.style.backgroundColor = "rgb(171, 61, 21)"
    img.src = "imagens/img-tarde.png"
} else {
    msg.innerHTML = "Bom Noite!!"
    bd.style.backgroundColor = "rgb(171, 61, 21)"
    bd.style.backgroundColor = "rgb(133, 0, 13)"
    img.src = "imagens/img-noite.png"
}

}