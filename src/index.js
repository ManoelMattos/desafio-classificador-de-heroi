// Define o nome e a quantidade de experiência (XP) do herói
let nomeDoHeroi = prompt("Digite o nome do heroi: ");
let xpDoHeroi = prompt("Digite a quantidade de experiência (XP) do heroi: ");

// Utiliza a estrutura de decisão para determinar o nível do herói
xpDoHeroi = parseInt(xpDoHeroi);
var nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exibe a mensagem final
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
