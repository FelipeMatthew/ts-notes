// Vai permitir fazer chamada de métodos em cadeia = .add().sub().add( )
// This as a Type

// GOF - Builder
export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new SubCalculator(10);

console.log(calculator.add(5).div(5).pow(3));

// Builder
export class RequestBuilder {
  private method: 'get' | 'post' | null = null; // Not initialized to not throw an error
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  // Ta limitando o tipo string para apenas 2 tipos de entrada de valor
  // 'get' | 'post'
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log('sending datas from ' + this.method + ' to ' + this.url);
  }
}

const request = new RequestBuilder();
request.setMethod('get').setUrl('https://google.com').send();
