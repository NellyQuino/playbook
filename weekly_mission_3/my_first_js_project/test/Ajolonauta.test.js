const Ajolonauta = require('./../app/Ajolonauta')

describe("Prueba de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creacion de objeto', () => {
        //Aqui tu puedes usar el codigo como deseas utilizar 
        const woopa = new Ajolonauta("Woopa")

        //Validad el resultado esperado 
        expect(woopa.name).toBe("Woopa")
    })

});