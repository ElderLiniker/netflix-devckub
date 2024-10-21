
let botaosom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let informacao = document.querySelector(".informacao")
let modal = document.querySelector(".modal")

function ligarsom(){
    
    video.muted = false

}

function aparecer(){
    modal.style.display = "block"

}
function esconder(){
    modal.style.display = "none"
}


botaosom.addEventListener("click", ligarsom)

informacao.addEventListener("click" ,aparecer)

modal.addEventListener("click", esconder)