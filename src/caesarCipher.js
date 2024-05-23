export default function caesarCipher(str, shift) {
    let output = ""

    for (let i = 0; i < str.length; i++) {
        const letter = str.charCodeAt(i)

        // charCode > 96 and < 123
        // lowercase a-z
        if (letter > 96 && letter < 123) {
            // account for wrapping
            if (letter + shift > 122 || letter + shift < 97) {
            // global ascii table from String object and fromCharCode
            output += String.fromCharCode((letter + shift) - 123 + 96)
            } else {
                output += String.fromCharCode(letter + shift)
            }
        } 

        // charCode > 64 and < 91
        // uppercase A-Z
        else if (letter > 64 && letter < 91) {
            // account for wrapping
            if (letter + shift > 90 || letter - shift < 65) {
                output += String.fromCharCode((letter + shift) - 91 + 64)
            } else {
                output += String.fromCharCode(letter + shift)
            }
        }
        // non-letters
        else {
            output += String.fromCharCode(letter)
        } 
    }
    
    return output
}