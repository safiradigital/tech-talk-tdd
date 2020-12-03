
const obtemClienteSpy = jest.fn()

class BancoDadosFake {
    obtemCliente = obtemClienteSpy
}


class Emprestimo {
    constructor(bancoDados) {
        this.bancoDados = bancoDados
    }

    empresta(clientId) {
        const cliente = this.bancoDados.obtemCliente(clientId)

        if(!cliente.isAprovado){
            return 0
        }

        return 100
    }
}

function makeSut(){
    const bancoDadosFake = new BancoDadosFake()
    const sut = new Emprestimo(bancoDadosFake)
    return sut
}

describe("Emprestimo", () => {
    test("Deve retornar 100 se o cliente está aprovado", () => {
        const CLIENTE_ESTA_APROVADO = true
        const clientId = "1234"

        obtemClienteSpy.mockReturnValue({
            id: clientId,
            isAprovado: CLIENTE_ESTA_APROVADO
        })

        const sut = makeSut()

        const emprestimo = sut.empresta(clientId)
        expect(emprestimo).toBe(100)
    })

    test("Deve retornar 0 se o cliente não está aprovado", () => {
        const CLIENTE_ESTA_APROVADO = false
        const clientId = "1234"

        obtemClienteSpy.mockReturnValue({
            id: clientId,
            isAprovado: CLIENTE_ESTA_APROVADO
        })

        const sut = makeSut()

        const emprestimo = sut.empresta(clientId)
        expect(emprestimo).toBe(0)
    })
})


