// interface and generics
// interface
// interface is a way to define the structure of an object.
// It is a contract that an object must adhere to.
// It is a way to define the shape of an object.
// It is a way to define the properties and methods of an object.
interface chai {
  flavor: string;
  price: number;
  milk?: boolean; // optional property, it may or may not be present in the object
}

// usage of interface
const masala: chai = {
  flavor: "masala",
  price: 10,
};

// readonly properties in interface
interface Shop {
  readonly id: number;
  name: string;
}
//usage of readonly properties in interface
const s: Shop = {
  id: 1,
  name: "Chai corner",
};

// s.id = 2; // error, because id is readonly and cannot be changed after it is set
