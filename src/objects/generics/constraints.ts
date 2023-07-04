type OberChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: OberChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['vacina1', 'vacina2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
