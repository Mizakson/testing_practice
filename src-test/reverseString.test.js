import reverseString from "../src/reverseString";

test("typeof = string", () => {
    const a = reverseString("Joe")
    expect(typeof a).toBe("string")
})