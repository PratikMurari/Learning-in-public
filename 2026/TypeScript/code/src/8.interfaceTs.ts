// 1 types
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

// 2 interfaces
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

// 3 A class can only implement an object type or intersection of object types with statically known members.
// as soon as u will make interface out of it, it will start working
// type Response = { ok: true } | { ok: false };
// class myRes implements Response {
//   ok = true;
// }

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type masalaChai = BaseChai & Extra;

const cup: masalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Pratik" };
const u2: User = { username: "Pratik", bio: "Pratik.ai" };

type Config = { readonly appName: string; version: string };
// since appName is readonly, we cannot change its value after it has been assigned.
// const cfg: Config = { appName: "coffee", version: "1.0" };
// cfg.appName = "tea";
