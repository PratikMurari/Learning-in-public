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
    // Public means it can be accessed from anywhere
    flavour = "Masala";
    // Private means it can only be accessed within the class
    secretIngredient = "Cardamom";
    reveal() {
        return this.secretIngredient; //ok
        //this can't be direct accessed outside the class, but we can access it through a method inside the class
    }
}
// how to access private members of a class
const c = new Chai();
c.reveal(); // ok, we can access the reveal method which returns the secret ingredient, but we can't access the secret ingredient directly because it is private
//Protected
class Shop {
    // protected means it can be accessed within the class and its subclasses
    shopName = "Chai corner";
}
// Branch is a subclass of Shop, so it can access the protected member shopName
class Branch extends Shop {
    getName() {
        return this.shopName; //ok, because it is protected and we are accessing it within a subclass
    }
}
// how to access protected members of a class
new Branch().getName(); // now you can see you can access the shopName through the getName method of the Branch class, even though it is protected in the Shop class
//
class Wallet {
    #balance = 100; // # means it is a private field.
    getBalance() {
        return this.#balance; // ok, we can access the private field within the class
    }
}
const w = new Wallet();
// we prefer private key over # because private is more flexible and can be accessed in subclasses, while # is strictly private to the class it is defined in.
w.getBalance(); // ok, we can access the balance through the getBalance method, but we can't access it directly because it is private
// Readonly
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity; // we can set the value of a readonly property in the constructor, but we can't change it after that
    }
}
//# sourceMappingURL=12.oop.js.map