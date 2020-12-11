// Atividade 01
function calculaMedia(notas) {
  var somaNotas = 0;

  for(var nota of notas) {
    somaNotas += nota;
  }

  var media = somaNotas / notas.length;
  console.log(media);
}

calculaMedia([10, 5]);

// Atividade 02
function elevaAoQuadradoLista(listaNumeros) {
  var listaNumerosAoQuadrado = [];

  for(var i = 0; i < listaNumeros.length; i++) {
    listaNumerosAoQuadrado[i] = listaNumeros[i] * listaNumeros[i];
  }

  console.log(listaNumerosAoQuadrado);
}

elevaAoQuadradoLista([1, 2, 3, 4]);

// Atividade 03
function verificaMaiorIdade(pessoas) {
  return pessoas.find(pessoa => pessoa.idade >= 18) !== undefined;
}

var reiPrynce = {
  nome: "Prynce",
  idade: 16,
  telefone: null,
  profissao: "É um gato"
}

var jade = {
  nome: "Jade",
  idade: 10,
  telefone: null,
  profissao: "É uma gata... gorda."
}

var marilda = {
  nome: "Maria",
  idade: 18,
  telefone: "+55 048 99661-3157",
  profissao: "Programador"
}

console.log(verificaMaiorIdade([reiPrynce, jade, marilda]));

// Atividade 04
// Considerando a mesma entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista possuem a profissão “Programador” retornando o resultado.

function verificaTodosProgramadores(pessoas) {
  return pessoas.filter(pessoa => pessoa.profissao === "Programador").length === pessoas.length;
}

var fenipe = {
  nome: "Felipe",
  idade: 18,
  telefone: "+55 048 99661-3157",
  profissao: "Programador"
}

console.log(verificaTodosProgramadores([jade, marilda]));
console.log(verificaTodosProgramadores([fenipe, marilda]));

// Atividade 05

function retornaNomePessoas(pessoas) {
  return pessoas.map(pessoa => pessoa.nome);
}

console.log(retornaNomePessoas([fenipe, marilda, jade, reiPrynce]));

// Atividade 06

function retornaPessoasMenoresDeIdade(pessoas) {
  return pessoas.filter(pessoa => pessoa.idade < 18);
}

console.log(retornaPessoasMenoresDeIdade([fenipe, marilda, jade, reiPrynce]));