/**
 * toHaveBeenCalledWith
 * 
 * toHaveBeenCalledWith serve para verificar com quais parâmetros um método do spy foi chamado
 * 
 * toHaveBeenCalledWith recebe como parâmetro os valores da chamada do método do spy, separados por vírgula
 * 
 */

describe("Teste do objeto toHaveBeenCelledWith", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it("deve possuir método somar com parâmetros válidos", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
    });

 });