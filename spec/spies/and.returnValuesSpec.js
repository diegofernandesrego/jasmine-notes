/**
 * and.returnValues
 * 
 * and.returnValues serve para informar ao spy quais os valores a serem retormados por chamada
 * 
 * and.returnValues aceita como parâmetro um ou mais valores, separados por vírgula
 * 
 * Se o númeto de chamadas for maior do que o de valores a serem retornados, será retornado 'undefined'
 * 
 * and.returnValues deve ser aplicado ao objeto spy
 * 
 */

describe("Teste do objeto Spy and.returnValues", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }, 
        subtrair: function(n1, n2){
            return n1 - n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValues(1, 5);
        spyOn(Calculadora,"subtrair")
    });


    it("deve retornar valores distintos para o método somar", function () {
        expect(Calculadora.somar(6, 2)).toEqual(1);
        expect(Calculadora.somar(1, 2)).toEqual(5);
        expect(Calculadora.somar(4, 4)).toBeUndefined();
        expect(Calculadora.somar).toHaveBeenCalledTimes(3);
    });

 });