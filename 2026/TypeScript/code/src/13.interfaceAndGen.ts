interface chai {
  flavor: string;
  price: number;
  milk?: boolean; // optional property, it may or may not be present in the object
}

const masala: chai = {
  flavor: "masala",
  price: 10,
};
