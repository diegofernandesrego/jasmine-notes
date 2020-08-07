/**
 * calls.reset
 * 
 * O calls.reset serve para limpar a lista com os dados das chamadas dos métodos de um spy
 * 
 * Pode ser útil quando tiver suítes aninhadas ou mesmo precisar restaurar o valor padrão das chamadas
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


   
    it("deve validar o uso calls.reset", function () {
        Calculadora.somar(1,1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
        Calculadora.somar.calls.reset();
        expect(Calculadora.somar.calls.any()).toBeFalsy();
        
        
    });

 });