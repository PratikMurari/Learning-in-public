function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}...`);
}

makeChai("Masala Chai", 2);

function getChaiPrice(): number {
  // return "25 rupees"; // This will cause a type error because the return type is specified as number
  return 25;
}

function makeOrder(order: string): string | null {
  if (!order) return null;
  return order;
}

//void function means it does not return anything
function logChai(): void {
  console.log("Chai is being made...");
}

//optional parameter function
//output will be optional, or if it comes, it will be of type string
function orderChai(type?: string) {}

//default parameter function
function orderChaiWithDefault(type: string = "Masala Chai") {
  console.log(`Ordering ${type}...`);
}
