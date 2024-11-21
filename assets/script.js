const body = document.body;
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3"); // Corrigido para card3
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const fechar = document.getElementById("fechar");
const fechar1 = document.getElementById("fechar1");
const fechar2 = document.getElementById("fechar2");

card1.addEventListener("click", function () {
    modal1.style.display = "flex";
    body.style.overflow = "hidden";
});

card2.addEventListener("click", function () {
    modal2.style.display = "flex";
    body.style.overflow = "hidden";
});

card3.addEventListener("click", function () {
    modal3.style.display = "flex";
    body.style.overflow = "hidden";
});

fechar.addEventListener("click", function () {
    modal1.style.display = "none";
    body.style.overflow = "auto";
});

fechar1.addEventListener("click", function () {
    modal2.style.display = "none";
    body.style.overflow = "auto";
});

fechar2.addEventListener("click", function () {
    modal3.style.display = "none";
    body.style.overflow = "auto";
});

// Fechar ao clicar fora do conteúdo do modal
window.addEventListener("click", function(event) {
    if (event.target === modal1 || event.target === modal2 || event.target === modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        body.style.overflow = "auto"; // Restaurar o scroll do body
    }
});

