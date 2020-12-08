// Atividade 01
function calculaMedia(notas) {
  if( !Array.isArray(notas) || notas.length < 1 ) {
    estouraExcecaoCustom(`Parâmetro inválido: ${notas}`);
  }

  let notaTotal = 0;

  for (const nota of notas) {
    notaTotal += nota;
  }

  return notaTotal / notas.length;
}

// Função especial para evitar chamada incorreta
function estouraExcecaoCustom(mensagem) {
  throw new Error(mensagem);
}