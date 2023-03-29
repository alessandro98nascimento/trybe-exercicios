const myRemove = require("./exercicio-01");



describe("Requisito 01", () => {
  it("Retorna array [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it("Não retorna array[1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it("Retorna array [1, 2, 3, 4, 5]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});
