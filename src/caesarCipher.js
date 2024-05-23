export default function caesarCipher(str, shift) {
    
    if (typeof str !== "string") throw new Error("Enter a valid phrase: string")
    if (typeof shift !== "number") throw new Error("Enter a valid shift factor: number")

    const lowerABC = "abcdefghijklmnopqrstuvwxyz"
    const upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return str
    .split("")
    .map((letter) => {

        if (lowerABC.includes(letter)) {
            let index = lowerABC.indexOf(letter)
            // account for wrapping using modulus
            let newIndex = (index + shift) % 26
            return lowerABC[newIndex]
        }

        else if (upperABC.includes(letter)) {
            let index = upperABC.indexOf(letter)
            // account for wrapping using modulus
            let newIndex = (index + shift) % 26
            return upperABC[newIndex]
        }
        else {
            // if not a letter, just return it
            return letter
        }
    }).join("")

}