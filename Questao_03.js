function mostrarInformacoes(nome, nota1, nota2) {
    let notaFinal = (nota1*0.6) + (nota2*0.4);
    alert("Nome do aluno: " + nome + "\nNota 1: " + nota1 + "\nNota 2: " + nota2);
    alert("Nome do aluno: " + nome + "\nNota final: " + notaFinal);
}

let nome = "Gustavo Martins";
let nota1 = 7;
let nota2 = 8.5;

mostrarInformacoes(nome, nota1, nota2);

nome = "Sophia Franchi";
nota1 = 8;
nota2 = 6;

mostrarInformacoes(nome, nota1, nota2);

nome = "Leon Martins";
nota1 = 5;
nota2 = 9;

mostrarInformacoes(nome, nota1, nota2);