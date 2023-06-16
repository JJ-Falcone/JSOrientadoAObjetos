import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const admin = new Admin('Mari', 'pti@gmail.com', '04/04/03')

console.log(admin.criarCurso('HTML', 35));