class Chai {
  flavour: string;
  //  price: number;

  //   constructor(flavour: string, price: number) {
  //     this.flavour = flavour;
  //     this.price = price;
  //   }

  constructor(flavour: string) {
    this.flavour = flavour;
    console.log(this);
  }
  // this is just a value provided to the class, it is not a parameter of the constructor, so we can set it after creating an instance of the class
}

const masalaChai = new Chai("Ginger");
masalaChai.flavour = "masala";
