export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  insertCollaborator(collaborator: Collaborator): void {
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
    public readonly name: string,
    public readonly lastName: string,
    public readonly age: number,
  ) {}
}

const company1 = new Company('Facebook', '466-397-760/0001-55');

const colab1 = new Collaborator('felipe', 'matthew', 19);
const colab2 = new Collaborator('luiz', 'otávio', 12);
const colab3 = new Collaborator('maria', 'rita', 39);

company1.insertCollaborator(colab1);
company1.insertCollaborator(colab2);
company1.insertCollaborator(colab3);

company1.showCollaborators();
