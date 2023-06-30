export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('camisa', 49.9);
const produto2 = new Produto('short', 57.9);
const produto3 = new Produto('vestido', 89.9);

const carrinhoCompras = new CarrinhoCompras();
carrinhoCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoCompras.valorTotal());
console.log(carrinhoCompras.quantidadeProdutos());
