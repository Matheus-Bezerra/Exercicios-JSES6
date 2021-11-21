/*
1) Crie um arquivo chamado functions.js com o seguinte conteúdo passado
*/
// 1.1 Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario e chame a função info()
import classeUsuario from './functions.js';

classeUsuario.info();

// 1.2 Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
import { idade } from './functions.js';
console.log(idade);

//1.3 Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade para IdadeUsuario
import padraoIdade, { idade as idadeUsuario } from './functions.js';
console.log(idadeUsuario);
