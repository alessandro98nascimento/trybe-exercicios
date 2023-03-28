const myFizzBuzz = require("./exercicio-02");

describe("Requisito 01", () => {
  it("Retorna string: fizzbuzz", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it("Retorna string: fizzbuzz", () => {
    expect(myFizzBuzz(9)).toBe("fizz");
  });

  it("Retorna string: fizzbuzz", () => {
    expect(myFizzBuzz(50)).toBe("buzz");
  });

  it("Retorna string: fizzbuzz", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it("Retorna string: fizzbuzz", () => {
    expect(myFizzBuzz("rapaz")).toBe(false);
  });
})