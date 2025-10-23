class User4 {
  readonly city: string = "Deradun";
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}
}

const user4Instance = new User4("Pratik", "p@m.com", "U1234");
console.log(user4Instance);
