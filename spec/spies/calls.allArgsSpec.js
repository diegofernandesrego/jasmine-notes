/**
 * calls.allArgs
 * 
 * O calls.allArgs retorna uma lista com todos os argumentos de todas as chamadas aos métodos de um spy
 * 
 * Ele não recebe nenhum argumento com parâmetro
 * 
 * Prefira utilizar o calls.argsFor quando precisar verificar um item em específico
 * 
 */

describe("Teste do objeto Spy Call.allArgs", function () {

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


   
    it("deve demonstrar o uso do calls.allArgs", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        //console.log("calculadora: ", Calculadora.somar.calls);
        expect(Calculadora.somar.calls.allArgs())
            .toEqual([[1,1],[2,2]]);
        
    });

 });