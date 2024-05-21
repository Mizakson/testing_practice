import capitalize from "../src/capitalize";


test("type is string", () => {
    const a = capitalize("max")
    expect(typeof a).toBe("string");
})