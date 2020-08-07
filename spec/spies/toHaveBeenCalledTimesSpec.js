/**
* toHaveBeenCalledTimes
* 
* toHaveBeenCalledTimes serve para verificar quantas vezes um método do spy foi chamado
* 
* toHaveBeenCalldTime recebe como parâmetro o número de execuções a ser vefificado
*/
describe("Teste do objeto toHaveBeenCalledTimes", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it("deve chamar o método somar duas vezes", function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

});