class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + ' ' + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let alunos = [
    new Aluno("Gustavo", "Martins", 7, 8.5),
    new Aluno("Sophia", "Franchi", 8, 6),
    new Aluno("Leon", "Martins", 5, 9),
    new Aluno("Nilce", "Moretto", 4, 3),
    new Aluno("Eduardo", "Benvenuti", 9, 6)
];

function mostrarAlunos() {
    alunos.forEach(aluno => {
        alert("Nome Completo: " + aluno.nomeCompleto() + "\nMédia: " + aluno.media() + "\nSituação do aluno: " + aluno.situacao());
    });
}

mostrarAlunos();