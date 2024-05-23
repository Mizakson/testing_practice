import caesarCipher from "../src/caesarCipher"

test("Case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})


test("Hello, World!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})