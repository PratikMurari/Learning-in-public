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

// how to access private members of a class
const c = new Chai();
c.reveal(); // ok, we can access the reveal method which returns the secret ingredient, but we can't access the secret ingredient directly because it is private
