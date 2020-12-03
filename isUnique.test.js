function isUnique(array){
    return array
    .filter((el, index) => array.indexOf(el) !== index)
}

describe("isUnique", () => {
    test("Deve retornar os elementos duplicados", () => {
        const arr = [1,2,3,4,5,1]

        const resultado = isUnique(arr)

        expect(resultado).toMatchObject([1])
    })

})