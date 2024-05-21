import capitalize from "../src/capitalize";


test("type is string", () => {
    const a = capitalize("max")
    expect(typeof a).toBe("string");
})

test("is first letter capitalized", () => {
    const a = capitalize("max")
    expect(a[0]).toBe("M")
})

test("is the rest of str lowercase", () => {
    const a = capitalize("max")
    expect(a).toBe("Max")
})