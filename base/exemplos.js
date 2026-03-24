//-------------------------- Exemplo 1 -----------------------------//
// function
function exercicio1() {
    alert("OIE")
}
// getElement
const batata = document.getElementById("exercicio1")
// addEventlistener
batata.addEventListener('click' , () => { exercicio1() })