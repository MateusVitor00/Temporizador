function hoursSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    timeZone: "GMT",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let seconds = 0;
let timer;

function launcher() {
  timer = setInterval(function () {
    seconds++;
    relogio.innerHTML = hoursSeconds(seconds);
  }, 1000);
}

//INICIAR
iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  launcher();
});
//PAUSAR
pausar.addEventListener("click", function (event) {
  relogio.classList.add("pausado");
  clearInterval(timer);
});
//ZERAR
zerar.addEventListener("click", function (event) {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  seconds = 0;
});
