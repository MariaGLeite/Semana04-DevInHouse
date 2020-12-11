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