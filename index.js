// Vou comentar dentro deste código a forma que utilizei cada comando para resolver o desafio dado pelo Felipão da Dio
// Dentro do arquivo README.MD estão as instruções do desafio.

// Nessa primeira parte, declarei as variáveis 
let nameHero = "Justiceiro"; // Nome do herói
let xpHero = 0; // Quantidade de XP, partindo de zero
let rankHero = ""; // O rank, que terá seu valor atribuído assim que o laço de repetição for executado.

/* Daqui para frente está o laço de repetição, contendo em seu escopo estruturas de decisão, que por sua vez
verificam o valor da variável xpHero. A cada vez que o laço for executado, serão adicionados 651 de XP,
dando a possibilidade de aumentar o nível do herói e ter um novo rank. Adicionei uma mensagem referente à 
conclusão de uma missão para justificar o aumento de XP e uma exibição vazia para simular uma próxima execução.
Dentro de todo o laço While, podem-se verificar os operadores. */
while (xpHero <= 10001) {
    console.log("Missão concluída com sucesso, foram acrescentados 651 de XP ao seu nível atual.");
    xpHero += 651;
    
    if (xpHero <= 1000) {
        rankHero = "Ferro";
    } else if (xpHero <= 2000) {
        rankHero = "Bronze";
    } else if (xpHero <= 5000) {
        rankHero = "Prata";
    } else if (xpHero <= 7000) {
        rankHero = "Ouro";
    } else if (xpHero <= 8000) {
        rankHero = "Platina";
    } else if (xpHero <= 9000) {
        rankHero = "Ascendente";
    } else if (xpHero <= 10000) {
        rankHero = "Imortal";
    } else if (xpHero >= 10001) {
        rankHero = "Radiante";
    } else {
        rankHero = "Sem Rank";
    }
    
    console.log("Olá " + nameHero + ", o seu rank atual é " + rankHero + " e você tem " + xpHero + " de XP.");
    console.log("");
    console.log("");
}

// Essa foi a forma que utilizei para concluir o desafio no dia 17/06/2024. Pretendo fazer atualizações conforme meu aprendizado.
