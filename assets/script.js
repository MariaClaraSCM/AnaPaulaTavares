const body = document.body;
/*const card1 = document.getElementById("card1");
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
});*/

/*Mob */

const card1Mob = document.getElementById("card1Mob");
const card2Mob = document.getElementById("card2Mob");
const card3Mob = document.getElementById("card3Mob"); // Corrigido para card3
const modal1Mob = document.getElementById("modal1Mob");
const modal2Mob = document.getElementById("modal2Mob");
const modal3Mob = document.getElementById("modal3Mob");
const fecharMob = document.getElementById("fecharMob");
const fechar1Mob = document.getElementById("fechar1Mob");
const fechar2Mob = document.getElementById("fechar2Mob");

card1Mob.addEventListener("click", function () {
    modal1Mob.style.display = "flex";
    body.style.overflow = "hidden";
});

card2Mob.addEventListener("click", function () {
    modal2Mob.style.display = "flex";
    body.style.overflow = "hidden";
});

card3Mob.addEventListener("click", function () {
    modal3Mob.style.display = "flex";
    body.style.overflow = "hidden";
});

fecharMob.addEventListener("click", function () {
    modal1Mob.style.display = "none";
    body.style.overflow = "auto";
});

fechar1Mob.addEventListener("click", function () {
    modal2Mob.style.display = "none";
    body.style.overflow = "auto";
});

fechar2Mob.addEventListener("click", function () {
    modal3Mob.style.display = "none";
    body.style.overflow = "auto";
});

// Fechar ao clicar fora do conteúdo do modal
window.addEventListener("click", function(event) {
    if (event.target === modal1Mob || event.target === modal2Mob || event.target === modal3Mob) {
        modal1Mob.style.display = "none";
        modal2Mob.style.display = "none";
        modal3Mob.style.display = "none";
        body.style.overflow = "auto"; // Restaurar o scroll do body
    }
});