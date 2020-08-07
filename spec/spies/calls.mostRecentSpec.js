/**
 * calls.mostRecent
 * 
 * O calls.mostRecent retorna os dados da última chamada do método do spy
 * 
 * Seria o mesmo que acessar o último elemento (quantidade de itens -1) da lista contida em calls.all
 * 
 */

describe("Teste do objeto Spy calls.mostRecent", function () {

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


   
    it("deve demonstrar o uso do calls.mostRecent", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        

        var retorno = Calculadora.somar.calls.mostRecent();

        console.log("retorno: ", retorno);
        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([2,2]);
        expect(retorno.returnValue).toEqual(10);
        //expect(retorno.returnValue).toBeUndefined();
        expect(retorno.returnValue).not.toBeUndefined();
        
    });

 });