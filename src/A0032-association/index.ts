export class Writer {
  protected _tool: Tool | null = null;

  constructor(protected _name: string) {}

  get name(): string {
    return this._name;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('there is no tool selected');
      return;
    }
    this.tool.write();
  }
}
export abstract class Tool {
  constructor(protected _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}
export class Pencil extends Tool {
  write(): void {
    console.log(`${this.name} is writing`);
  }
}
export class WriteMachine extends Tool {
  write(): void {
    console.log(`${this._name} is writing`);
  }
}

const writer = new Writer('Paulo Bandeira');
const pencil = new Pencil('Tinteiro');
const writeMachine = new WriteMachine('máquina de escrever');

writer.tool = pencil;
writer.tool = writeMachine;
writer.write();
