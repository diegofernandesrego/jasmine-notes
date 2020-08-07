/**
 * calls.any
 * 
 * Todo spy possui um atributo "calls" com informações sobre suas chamadas
 * 
 * O "calls.any" serve para indicar se o método so spy foi chamada ao menos uma vez
 * 
 * Ele não recebe parâmetros e retorna um valor booleano se ocorreu ou não uma chamada ao método do spy 
 * 
 */

describe("Teste do objeto Spy calls.any", function () {

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


    it("deve demostrar o uso do calls.any", function () {
        expect(Calculadora.somar.calls.any()).toBeFalsy();
       Calculadora.somar(1,1);
       expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

 });