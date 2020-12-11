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
  profissao: "Programadora"
}

console.log(verificaMaiorIdade([reiPrynce, jade, marilda]));