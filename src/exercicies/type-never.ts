//never uso quando eu sei que aquele retorno na funcao vai quebrar a aplicacao se nao for tratado

function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
