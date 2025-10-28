// https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

const score: Array <number> = []

const names: Array <string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo<T>(val: any): any {
    return val
}

// Generic Type
function identityThree<Type>(val: Type): Type {
    return val
}

//identityThree(true)

// How generally people write generics
function identityFour<T>(val: T): T {
    return val
}

console.log(identityFour("Hello World"))

interface Bottle {
    brand: string,
    type: number
}

const Test = identityFour<Bottle>({ brand: "Coca Cola", type: 1 })
console.log(Test)
