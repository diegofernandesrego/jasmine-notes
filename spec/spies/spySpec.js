/**
 * 
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
        //spyOn(Calculadora, "somar");
        spyOn(Calculadora,"subtrair")
    });


    it("deve possuir método somar como não definido", function () {
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });

 });