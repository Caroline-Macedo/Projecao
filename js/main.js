var click = document.querySelector(".click");
var primary = document.querySelector(".primary-card");
var secundary = document.querySelector(".secundary-card");
var voltar = document.querySelector(".clicar");

click.addEventListener("click", TrocarDeTela);
voltar.addEventListener("click", VoltarATela)


function TrocarDeTela(){
    secundary.classList.remove("hidden")
    primary.classList.add("hidden")
};

function VoltarATela(){
    primary.classList.remove("hidden")
    secundary.classList.add("hidden")
};
