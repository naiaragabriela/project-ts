let nome: string = 'Naiara'; //qualquer tipo de string
let idade: number = 30; //10,1.54, -5.55, 0fd32, 0122wsr343
let adulto: boolean = true; //true ou false
let simbolo: symbol = Symbol('qualquer-@$#'); //symbol
//let big: bigint = 10n; //bigint

//no tipo sempre usar letra minuscula


//Arrays

let arraysNumber: Array<number> = [1,2,3];
let arraysNumber2: number[] = [1,2,3];
let arrayString: Array<string> = ['a', 'b', 'c'];
let arrayString2: string[] = ['a', 'b'];

//Objetos

let pessoa: {nome:string, idade:number, adulto?: boolean} = {
  idade:30,
  nome: 'Naiara'
};

//Functions
function soma(x: number, y: number): number {
  return x + y;
};
const soma2: (x: number, y: number) => number = (x, y) => x + y;
