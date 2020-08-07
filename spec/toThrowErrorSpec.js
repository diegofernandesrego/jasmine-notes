/**
 *  toThrownError
 * 
 *  #Verifica se uma exceção é lançada por um método
 *  #Valida o tipo da exceção lançada
 *  #Valida a mensagem de erro contida na exceção
 *  #Suporta expressão regular na validação da mensagem de erro da excução
 *  #Deve ser ultilizada para maior controle do erro lançado
 * 
 * 
 */

describe("Teste do toThrowError", function(){

    it("Deve demostrar o uso do toThowError", function(){
       
       var somar = function(n1, n2){
           if(n1 <= 0 || n2 <= 0){
               throw new TypeError("Deve ser maior que 0");
           }
           return n1 + n2;
       }

        expect(function() { somar(0,0) }).toThrowError();
        expect(function() { somar(0,0) }).toThrowError("Deve ser maior que 0");
        expect(function() { somar(0,0) }).toThrowError(/maior que 0/); //expressão regular
        expect(function() { somar(0,0) }).toThrowError(TypeError); //verifica do tipo do error
        expect(function() { somar(0,0) }).toThrowError(TypeError, "Deve ser maior que 0"); //verifica do tipo do error e a mensagem

        expect(function() { somar(1,1) }).not.toThrowError();

    })

 });