import calculator from "../src/calculator";

test("add", () => {
    expect(typeof calculator.add(1,1)).toBe("number")
})