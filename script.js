let botoes = document.querySelectorAll(".botoes buttom")
botoes.forEach(botao => {
botao.addEventListener("click", guardarNota)

})
    
function guardarNota(evento) {
 let nota = evento.target.innertext

localStorage.setItem("nota", nota)

}



