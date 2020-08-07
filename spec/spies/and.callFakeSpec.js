/**
 * and.callFake
 * 
 * and.callFake serve para definir uma nova implementação para um método de um spy
 * 
 * and.callFake deve ser aplicado ao objeto spy
 * 
 * and.callFake recebe como parâmetro uma função como a nova implementação a ser executada quando o método for chamado
 * 
 */

describe("Teste do objeto Spy and.callFake", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }, 
        subtrair: function(n1, n2){
            return n1 - n2;
        }
    }

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.callFake(function(n1, n2){
            return n1-n2;

        });
        spyOn(Calculadora,"subtrair")
    });


    it("deve retornar valores distintos para o método somar", function () {
        expect(Calculadora.somar(5, 2)).toEqual(3);
      
        
    });

 });