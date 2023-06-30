export class Writer {
  private _tool: Tools | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tools | null) {
    this._tool = tool;
  }

  get tool(): Tools | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.tool.write();
  }
}

export abstract class Tools {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tools {
  write(): void {
    console.log(this.name + 'está escrevendo...');
  }
}

export class MachineWrite extends Tools {
  write(): void {
    console.log(this.name + ' está digitando...');
  }
}

const writer = new Writer('Naiara');
const pen = new Pen('bic');
const machineWrite = new MachineWrite('Maquina de digitar');

console.log(writer.name);
console.log(pen.name);
console.log(machineWrite.name);

writer.write();
