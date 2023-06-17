import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

/*const novoUser = new User('Mariana', 'm@m.com', '04/04/03')
console.log(novoUser.exibirInfos());*/

/*const novoAdmin = new Admin('Jorge', 'j@j.com', '20/11/02')
console.log(novoAdmin.nome);
novoAdmin.nome = 'Mariana de Melo Fontes'
console.log(novoAdmin.nomeCompleto);
console.log(novoAdmin.nome);
console.log(novoAdmin.sobrenome);*/

const novoDocente = new Docente('raphael','camargo', 'r@r.com', '01/01/01')
console.log(novoDocente.exibirInfos());