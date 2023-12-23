// private só vai poder ser acessado dentro da classe
// Caso necessite utilizar fora usa o PROTECTED, pois
// ele vai manter o elemento privado mas é acessivel em classes filhas

export class Company {
  readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Company {
  constructor() {
    super('udemy', '111.111.111.11/0001-11');
  }

  popDeleteCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();

    if (collaborator) return collaborator;

    return null;
  }
}

const company1 = new Udemy();

const colab1 = new Collaborator('felipe', 'matthew', 19);
const colab2 = new Collaborator('luiz', 'otávio', 12);
const colab3 = new Collaborator('maria', 'rita', 39);

company1.insertCollaborator(colab1);
company1.insertCollaborator(colab2);
company1.insertCollaborator(colab3);

const removedCollaborator = company1.popDeleteCollaborator();
console.log('removed collaborator:', removedCollaborator);

company1.showCollaborators();
