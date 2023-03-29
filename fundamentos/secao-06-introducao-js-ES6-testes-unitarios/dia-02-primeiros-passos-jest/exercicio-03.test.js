const decodeEncode = require("./exercicio-03");

console.log(typeof decodeEncode.decode)

describe("Requisito 01", () => {
    
    it("Teste se encode e decode são funções", () => {
      expect(typeof decodeEncode.decode).toBe("function");
      expect(typeof decodeEncode.encode).toBe("function");
    })

    it("função encode, vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
        expect(decodeEncode.encode("a, e, i, o, u")).toBe("1, 2, 3, 4, 5");
    })

    it("função decode, números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente", () => {
        expect(decodeEncode.decode("1, 2, 3, 4, 5")).toBe("a, e, i, o, u");
    })

    it("")

    it("string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro", () => {
        expect(decodeEncode.decode("c1m2l4")).toHaveLength(6);
        expect(decodeEncode.encode("camelo")).toHaveLength(6);
    }) 
})