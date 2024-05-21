import reverseString from "../src/reverseString";

test("typeof = string", () => {
    const a = reverseString("Joe")
    expect(typeof a).toBe("string")
})

test("reversed", () => {
    const a = reverseString("Joe")
    expect(a).toBe("eoJ")
})