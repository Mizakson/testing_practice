import analyzeArray from "../src/analyzeArray"

test("check", () => {
    const obj = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }

    const arr = [1, 8, 3, 4, 2, 6]

    expect(analyzeArray(arr)).toStrictEqual(obj)

})