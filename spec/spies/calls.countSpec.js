/**
 * calls.count
 * 
 * O calls.count armazena e retorna o número de vezes que um método do spy foi chamado
 * 
 * Ele não possui parâmetros e retorna o número de chamadas do método
 * 
 * 
 */

describe("Teste do objeto Spy", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }, 
        subtrair: function(n1, n2){
            return n1 - n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10);
        spyOn(Calculadora,"subtrair")
    });


    it("deve demonstrar o uso do calls.count", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });

 });