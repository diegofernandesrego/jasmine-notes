/**
 * 
 * toHaveBeenCalled
 * 
 * toHaveBeenCalled serve para informar se um método do spy foi executado ao menos uma vez
 * 
 * toHaveBeenCalled não possui parâmetros
 * 
 */

describe("Teste do objeto Spy toHaveBeenCalled", function(){

    var Calculadora = {
        somar: function(n1, n2){
            return n1 + n2;
        }
    }

    beforeAll(function(){
        spyOn(Calculadora, "somar");
    });

    it("deve chamar o método somar ao menos uma vez - toHaveBeenCalled", function(){
        //para saber se o método não chamado
        expect(Calculadora.somar).not.toHaveBeenCalled();
        Calculadora.somar(1,1);
        //para saber se o método foi chamado
        expect(Calculadora.somar).toHaveBeenCalled();
    })
})