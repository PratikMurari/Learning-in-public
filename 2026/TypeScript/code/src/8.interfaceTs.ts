// 1
// since we had common parameters in both makeChai and serveChai,
// we can create an interface for it called ChaiOrder and use it as the type for the parameter of both functions.
// which made our code more readable, reusable and easier to maintain.

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

// 2
// we can also use interfaces to define the structure of objects that we want to create.
// for example, we can create an interface for a tea recipe and then implement it in a class.
type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 100;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}
