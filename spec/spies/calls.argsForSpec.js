/**
 * calls.argsFor
 * 
 * O calls.argsFor armazena e retorna uma lista(array) contendo os parâmetros utilizados em cada chamda do método de um spy
 * 
 * Ele recebe como parâmetro o índice da chamada a ser retornada
 * 
 * É bastante útil para validar se um método foi chamado como os parâmetros corretos
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
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora,"subtrair")
    });


   
    it("deve demonstrar o uso do calls.argsFor", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        //console.log("calculadora: ", Calculadora.somar.calls);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([1,2]);
    });

 });