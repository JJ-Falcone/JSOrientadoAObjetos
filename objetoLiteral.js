const user = {
    nome: "Jorge",
    email: "jorgefalcone02@gmail.com",
    nascimento: "20/11/2002",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Mariana",
    email: "pitifontes@gmail.com",
    nascimento: "04/04/2003",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log("curso criado!");
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
