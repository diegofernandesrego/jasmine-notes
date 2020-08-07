/**
 * and.throwError
 * 
 * and.throwErro serve para informar ao spy que determinado método deve lançar um erro ao ser executado
 * 
 * and.throwError dese ser aplicado ao objeto spy
 * 
 * and.throwError recebe como parâmetro uma string contendo a mansage de erro a ser lançada
 * 
 */

describe("Teste do objeto Spy andThrowError", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }, 
        subtrair: function(n1, n2){
            return n1 - n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.throwError("erro");
        spyOn(Calculadora,"subtrair")
    });


    it("deve lançar um erro ao somar", function () {
        expect(function(){
            Calculadora.somar(1,1)
        }).toThrowError("erro");
      
        
    });

 });