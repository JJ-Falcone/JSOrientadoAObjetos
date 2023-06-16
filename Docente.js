import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}`
    }
}

const docente = new Docente("Jorge", "j@j.com", "20/11/2002")

console.log(docente.aprovaEstudante('mari', 'psicologia'));
console.log(docente.exibirInfos());
console.log(docente);