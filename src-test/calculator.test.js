import calculator from "../src/calculator";

test("add -> int", () => {
    expect(typeof calculator.add(1,1)).toBe("number")
})

test("subtract -> int", () => {
    expect(typeof calculator.subtract(4,2)).toBe("number")
})

test("divide -> int", () => {
    expect(typeof calculator.divide(6,3)).toBe("number")
})

test("multiply -> int", () => {
    expect(typeof calculator.multiply(2,5)).toBe("number")
})

test("add -> correct", () => {
    expect(calculator.add(1,1)).toBe(2)
})

test("subtract -> correct", () => {
    expect(calculator.subtract(4,2)).toBe(2)
})

test("divide -> correct", () => {
    expect(calculator.divide(6,3)).toBe(2)
})

test("multiply -> correct", () => {
    expect(calculator.multiply(2,5)).toBe(10)
})