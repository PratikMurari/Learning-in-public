function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}...`);
}

makeChai("Masala Chai", 2);

function getChaiPrice(): number {
  // return "25 rupees"; // This will cause a type error because the return type is specified as number
  return 25;
}
