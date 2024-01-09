// Carrinho de compras agrega produtos
// carrinho nao existe sem roda mas roda existe, é necesário para total funcionalidade

export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    products.forEach((product) => {
      this.products.push(product);
    });

    // outra maneira de se fazer
    //for (const product of products) {
    //  this.products.push(product);
    //}
  }
  amountProducts(): number {
    return this.products.length;
  }

  amountPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const cart = new ShoppingCart();

const television = new Product('Televisão', 800.0);
const computer = new Product('Computador', 1200.0);
const phone = new Product('Celular', 450.0);

cart.insertProducts(television, computer, phone);
console.log(cart);
console.log(cart.amountPrice());
