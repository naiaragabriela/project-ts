export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('O motor está ligado.');
  }

  acelerar(): void {
    console.log('O motor está acelerando.');
  }

  parar(): void {
    console.log('O motor está parado.');
  }

  desligar(): void {
    console.log('O motor está desligado.');
  }
}
