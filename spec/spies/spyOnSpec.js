/**
 * 
 * spyOn
 * 
 * spyOn serve para criar um mock(objeto falso) a ser utilizado nos teste
 * 
 * A função spyOn recebe como parâmetros o nome do objeto e do método q serem ultilizados como mock
 * 
 */

describe("Teste do objeto SpyOn", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it("deve possuir método somar como não definido", function () {
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });



})