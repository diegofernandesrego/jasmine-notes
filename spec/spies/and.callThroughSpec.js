/**
 * 
 * and.callThough serve para informar ao spy que o método original deve ser executado
 * 
 * and.callThough deve ser aplicado ao objeto spy
 * 
 * Nesse caso o método original será executado, todos os recursos do spy serão mantidos e estarão disponíveis para verificação
 * 
 * 
 */

describe("Teste do objeto Spy and.callThrough", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }, 
        subtrair: function(n1, n2){
            return n1 - n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.callThrough();
        //spyOn(Calculadora, "somar");
        spyOn(Calculadora,"subtrair")
    });

    it("deve executar o método somar original", function () {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    });

 });