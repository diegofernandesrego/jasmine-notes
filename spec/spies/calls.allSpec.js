/**
 * calls.all
 * 
 * O calls.all contém e retona todas as informações de chamadas de um método do spy
 * 
 * As informações armazenadas são o tipo de objeto(object), os parâmetos de chamada(args), e os valores de retorno (returnValue)
 * 
 * Os itens acima são agrupados em uma lista, e são referenciados por número de chamada
 * 
 * 
 */

describe("Teste do objeto Spy Call.all", function () {

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


   
    it("deve demonstrar o uso do calls.all", function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        

        var retorno = Calculadora.somar.calls.all();

        console.log("retorno: ", retorno);
        expect(retorno[1].object).toEqual(Calculadora);
        expect(retorno[1].args).toEqual([2,2]);
        expect(retorno[1].returnValue).toEqual(10);
        //expect(retorno[1].returnValue).toBeUndefined();
        expect(retorno[1].returnValue).not.toBeUndefined();
        
    });

 });