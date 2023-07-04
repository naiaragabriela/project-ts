const objt1: Record<string, string | number> = {
  name: 'Naiara',
  lastName: 'Gabriela',
  age: 30,
};

console.log(objt1);

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

//Required
type PersonRequired = Required<PersonProtocol>;

//Partial
type PersonPartial = Partial<PersonRequired>;

//Readonly
type PersonReadonly = Readonly<PersonRequired>;

//Pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const obj2: PersonRequired = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 30,
};

console.log(obj2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asasuded34uydeeu7432jssiw82324d32',
  name: 'Naiara',
  age: 29,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}
const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

//Module mode
export default 1;
