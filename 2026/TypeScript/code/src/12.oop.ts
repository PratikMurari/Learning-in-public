// class Chai {
//   flavour: string;
//   //  price: number;

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
  public flavour: string = "Masala";

  // Private means it can only be accessed within the class
  private secretIngredient = "Cardamom";

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
  protected shopName = "Chai corner";
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
  #balance: number = 100; // # means it is a private field.

  getBalance() {
    return this.#balance; // ok, we can access the private field within the class
  }
}

const w = new Wallet();
// we prefer private key over # because private is more flexible and can be accessed in subclasses, while # is strictly private to the class it is defined in.
w.getBalance(); // ok, we can access the balance through the getBalance method, but we can't access it directly because it is private

// Readonly
class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity; // we can set the value of a readonly property in the constructor, but we can't change it after that
  }
}

// controlled gates
// we can use getters and setters to control the access to a property of a class, for example, we can use a setter to validate the value before setting it, and a getter to return the value in a specific format
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too much sugar");
    this._sugar = value;
  }
}

// how to use getters and setters
const C = new ModernChai();
C.sugar = 3; // ok, we can set the sugar level to 3
C.sugar = 6; // error, we can't set the sugar level to more than 5

// Static members
class EkChai {
  static shopName = "ChaiCode Caffe";
  constructor(public flavour: string) {}
}
console.log(EkChai.shopName); // ok, we can access the static member without creating an instance of the class

// Abstract classes
abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing Chai");
  }
}
// we can't create an instance of an abstract class, but we can create an instance of a subclass that implements the abstract method