/**
 * calls.first
 * 
 * O calls.first retorna os dados da primeira chamada do método do spy
 * 
 * Seria o mesmo que acessar o primeiro elemento (posição 0) da lista contida em calls.all
 * 
 */

describe("Teste do objeto Spy calls.first", function () {

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


   
    it("deve demonstrar o uso do calls.first", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        

        var retorno = Calculadora.somar.calls.first();

        console.log("retorno: ", retorno);
        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1,1]);
        expect(retorno.returnValue).toEqual(10);
        //expect(retorno.returnValue).toBeUndefined();
        expect(retorno.returnValue).not.toBeUndefined();
        
    });

 });