/*
1) Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
*/
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
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

// 2) A partir do seguinte vetor, utilize o smétodos de array para resolver os exercícios
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
  const { nome, idade } = usuario;
  return `${nome} tem ${idade} anos.`;
}
console.log(mostrarInfo({ nome: 'Matheus', idade: 18 }));
console.log('\n');

/*
5) Utilizando o operador de rest/spread (...) realize as seguintes operações:
*/

//5.1)Utilize rest, pois a partir do array: const arra = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados
const arra = [1, 2, 3, 4, 5, 6];
const x = arra.shift();
console.log(x);
const y = [...arra];
console.log(y);

//5.2) Utilize Spread, pois a partir do objeto e utilizando o operador spread: Crie uma variável dadoPessoa2 que contenha todos os dados do dadoPessoa porém com nome Gabriel. Crie uma variável dadoPessoa3 que contenha todos os dados do usuário porém com cidade Lontras.
const dadoPessoa = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  },
};

const dadoPessoa2 = { ...dadoPessoa };
dadoPessoa2.nome = 'Gabriel';
console.log(dadoPessoa2);
const dadoPessoa3 = { ...dadoPessoa };
dadoPessoa3.endereco.cidade = 'Lonntras';
console.log(dadoPessoa3);
console.log('\n\n');

/*
6) Converta o seguinte trecho de código utilizando Template Literals:
*/
const pessoa = 'Diego';
const idadePessoa = 23;
console.log('O usuário ' + pessoa + ' possui ' + idadePessoa + ' anos');
console.log(`O usuário ${pessoa} possui ${idadePessoa} anos`);
console.log('\n\n');

/*
7) Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
*/
const usuarioPessoa = 'Diego';
const idadeUsuario = 23;

const dadosUsuario = {
  usuarioPessoa: usuarioPessoa,
  idadeUsuario: idadeUsuario,
  cidade: 'Rio do Sul',
};

// Objeto na sintaxe curta do ES6:
const dadosUsuario2 = {
  usuarioPessoa,
  idadeUsuario,
  cidade,
};

console.log(dadosUsuario2);
/*=========FIM========= */
