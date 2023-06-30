export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const company1 = new Company('Udemy', '11.111.111/0001-11');
const collaborator1 = new Collaborator('Naiara', 'Gabriela');
const collaborator2 = new Collaborator('Ana', 'Cecilia');
const collaborator3 = new Collaborator('Joao', 'Miguel');

company1.addCollaborator(collaborator1);
company1.addCollaborator(collaborator2);
company1.addCollaborator(collaborator3);
console.log(company1);
console.log(company1.name);
company1.showCollaborators();
