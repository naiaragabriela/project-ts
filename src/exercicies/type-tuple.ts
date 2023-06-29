//tuple array com tipos bem específicos e tamanho fixo
//uso o readonly para mostrar que é imutável

const dadosCliente: readonly [number, string] = [1, 'Naiara'];
const dadosCliente1: [number, string, string] = [1, 'Naiara', 'Gabriela'];
const dadosCliente2: [number, string, string?] = [1, 'Naiara'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Naiara', 'Gabriela'];

console.log(dadosCliente);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
