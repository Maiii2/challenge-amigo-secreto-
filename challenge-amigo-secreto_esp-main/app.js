const inputAmigo=document.getElementById("amigo");
const listaAmigos=[];
const ulListaAmigos=document.getElementById("listaAmigos");
const ulResultado=document.getElementById("resultado");

if(inputAmigo.value==""){
    alert("INGRESAR UN NOMBRE")
}
function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML = ulListaAmigos.innerHTML +`<li>${inputAmigo.value}</li>`;
}

function sortearAmigo(){
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
     ulResultado.innerHTML`<li> el amigo secreto es:${amigoSecreto}</li>`;
}