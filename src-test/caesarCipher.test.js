import caesarCipher from "../src/caesarCipher"

test("Hello, World!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})