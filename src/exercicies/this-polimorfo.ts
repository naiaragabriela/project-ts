export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mult(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  potencia(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new Calculadora(10);
calculadora.add(5).mult(2);
console.log(calculadora);

const calculadora2 = new SubCalculadora(10);
calculadora2.add(5).mult(2).div(2).sub(5).potencia(2);
console.log(calculadora2);

//Builder - Padrao de projeto da GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setURL(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setURL('hhtp://www.google.com').setMethod('post').send();
