/*
1) Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
*/
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    admin: false;
  }
  isAdmin() {
    const user = this.admin ? true : false;
    return user;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('matheusbwzerra002@gmail.com', 'Matheus123');
const adm1 = new Admin('matheusbwzerra002@gmail.com', 'Matheus123');
console.log(User1.isAdmin());
console.log(adm1.isAdmin());
console.log('\n\n');

// 2) A partir do seguinte vetgor, utilize o smétodos de array para resolver os exercícios
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'RocketSeat' },
  { nome: 'Gabriel', idade: 15, empresa: 'RocketSeat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 -> Crie uma variavel que contenha todas as idades dos usuários: [23,15,30]
const usuariosIdades = usuarios.map((usuario) => usuario.idade);
console.log(usuariosIdades);

// 2.2 -> Crie uma variavel que tenha apenas os usuarios da rocketseat
const usuariosRocketSeat = usuarios.filter(
  (usuario) => usuario.empresa === 'RocketSeat',
);
console.log(usuariosRocketSeat);

// 2.3 -> Crie uma variável que procura por um usuário que trabalhe na empresa Google
const usuarioGoogle = usuarios.find((usuario) => usuario.empresa === 'Google');
const temUsuarioGoogle = usuarioGoogle
  ? `Os usuários da Google são ${usuarioGoogle}`
  : 'Não tem usuários da google';
console.log(temUsuarioGoogle);

// 2.4 -> Multiplique todas as idades por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos
const idadeMulti = usuarios.map((usuario) => Number(usuario.idade * 2));
const idadeMenor = usuarios.filter((usuario, index) => {
  if (usuario.idade * 2 < 50) {
    usuario.idade = idadeMulti[index];
    return usuario;
  }
});
console.log(idadeMenor);
console.log('\n\n');

/* 
3) Converta as  funções nos seguintes trechos de código em Arrow Functions
*/

// 3.1: Converta para arrow:
const arr = [1, 2, 3, 4, 5];
/*arr.map(function (item) {
  return item + 10;
});*/
console.log(arr.map((item) => item + 10));

//3.2 -> Dica utilize uma const para a arrow function
const usuario = { nome: 'Matheus', idade: 18 };
/*function mostrarIdade(usuario) {
  return usuario.idade;
}*/
const mostrarIdade = (usuario) => usuario.idade;
console.log(mostrarIdade(usuario));

//3.3 -> Converta para arrow
const nome = 'Matheus';
const idade = 18;
/*function mostrarUsuario(nome = 'Wyslan', idade = 26) {
  return { nome, idade };
}*/
const mostrarUsuario = (nome = 'Wyslan', idade = 26) => {
  return { nome, idade };
};
console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));

//3.4 -> Converta para arrow
/*const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve;
  });
};*/
const promise = () => new Promise((resolve, reject) => resolve);
console.log(promise());
console.log('\n\n');

/*
4) Exercicios de Desestruturação
*/

//4.1 -> Utilize a desestruturação para trasformar cada propriedade em variável
const empresa = {
  nomeEmpresa: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};
const { nomeEmpresa } = empresa;
const { cidade, estado } = empresa.endereco;

console.log(nomeEmpresa, cidade, estado);

//4.2 -> desestruture nos parãmetros da função para buscar o nome e a idade do usuário
function mostrarInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostrarInfo({ nome: 'Matheus', idade: 18 }));
