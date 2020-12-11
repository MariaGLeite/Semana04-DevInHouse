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