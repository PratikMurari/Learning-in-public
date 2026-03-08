"use strict";
// class Chai {
//   flavour: string;
//   //  price: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }
//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);
//   }
//   // this is just a value provided to the class, it is not a parameter of the constructor, so we can set it after creating an instance of the class
// }
// const masalaChai = new Chai("Ginger");
// masalaChai.flavour = "masala";
// axis modifier
class Chai {
    flavour = "Masala";
    secretIngredient = "Cardamom";
    reveal() {
        return this.secretIngredient; //ok
        //this can't be direct accessed outside the class, but we can access it through a method inside the class
    }
}
const c = new Chai();
//# sourceMappingURL=12.oop.js.map