const taxa = 10 /100

function aplicaTaxa(valor) {
    if(typeof valor === 'string') {
        return 0
    }
    return valor + valor * taxa
}


describe("aplicaTaxa", () => {
    test("Deve aplicar a taxa corretamente", () => {
        const valor = 100

        const resultado = aplicaTaxa(valor)

        expect(resultado).toBe(110)
    })

    test("Deve retornar 0 se o resultado for inválido", () => {
        const VALOR_INVALIDO = "valor_invalido"

        const resultado = aplicaTaxa(VALOR_INVALIDO)

        expect(resultado).toBe(0)
    })
})