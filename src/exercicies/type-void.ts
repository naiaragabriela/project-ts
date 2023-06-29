function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Naiara',
  sobrenome: 'Gabriela',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};


semRetorno('Ana', 'Banana');
pessoa.exibirNome();

export { pessoa };
