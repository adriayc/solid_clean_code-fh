type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    // Applying DRY
    for (const key in this) {
      //   console.log(key, typeof this[key]);
      switch (typeof this[key]) {
        case 'string':
          //   if ((this[key] + '').length <= 0) throw new Error(`${key} is empty`);
          if ((<string>this[key]).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case 'number':
          if (<number>this[key] <= 0) throw new Error(`${key} is zero'`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    // No DRY
    // if (this.name.length <= 0) throw new Error('name is empty');
    // if (this.price <= 0) throw new Error('price is zero');
    // if (this.size.length <= 0) throw new Error('size is empty');

    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  //   const bluePants = new Product();
  const bluePants = new Product('Blue Large Pants', 10, 'M');
  console.log(bluePants.toString());
})();
