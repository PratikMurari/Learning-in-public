interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("Story created!");
  }
}

class YouTube implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("YouTube Story created!");
  }
}

console.log("Interfaces in TypeScript");
// what is going on here?
// Interfaces are used to define the structure of an object or a class.
// They can be used to enforce certain properties and methods on classes that implement them.
// This helps in maintaining consistency and ensuring that certain functionalities are present in the classes.  
// In this example, both Instagram and YouTube classes implement the takePhoto and Story interfaces, 
// ensuring they have the required properties and methods.
// This is useful for code organization and type safety in TypeScript.
// Interfaces can also be used to achieve multiple inheritance in TypeScript,
// as a class can implement multiple interfaces.
// This is particularly useful when you want to share common functionality across different classes without using traditional inheritance.
// Overall, interfaces are a powerful feature in TypeScript that help in defining contracts for classes and ensuring code quality.