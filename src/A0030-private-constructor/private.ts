// Boas práticas de desenvolvimento de classes
// Singleton - GoF | Factory Method - Database.database

export class Database {
  static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
    private port: number,
  ) {}

  connectDb(): void {
    console.log(`Connecting to ${this.host}, ${this.user}, ${this.port},`);
  }

  static getDatabase(
    host: string,
    user: string,
    pass: string,
    port: number,
  ): Database {
    if (Database.database) {
      console.log('Instancia da classe já criada');
      return Database.database;
    }
    console.log('instanciando nova classe');
    Database.database = new Database(host, user, pass, port);
    return Database.database;
  }
}

const database = Database.getDatabase('localhost', 'root', '123', 1111);
database.connectDb();

const database2 = Database.getDatabase('localhost', 'root', '123', 1111);
database2.connectDb();

console.log(database);
