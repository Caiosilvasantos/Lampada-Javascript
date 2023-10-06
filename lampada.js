const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

const quebrar = document.getElementById('lamp');
const acender = document.getElementById('lamp');



acender.addEventListener('mouseover', acenderLampada);
function acenderLampada() {
    lamp.src = "./imagens/ligada.jpg"
}


quebrar.addEventListener('click', lampQuebrar)
function lampQuebrar() {
    lamp.src = "./imagens/quebrada.jpg";
}

function lampOn() {
    lamp.src = "./imagens/ligada.jpg";
}
function lampOff() {
    lamp.src = "./imagens/desligada.jpg";
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);