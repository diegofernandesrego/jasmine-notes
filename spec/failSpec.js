/**
 *  Falha manual(Fail)
 * 
 *  #Falha manual permite interromper um teste lançando um erro.
 *  #O Jasmine possui a função "fail" para falhar manualmente um teste
 *  #Utilizamos a falha manual para certificar que uma operação não desejada não seja executada
 *  
 * 
 */

describe("Teste do fail", function(){

    it("Deve demostrar o uso do Fail", function(){
       
        var operacao = function(executar, callback){
            if(executar){
                callback();
            }
        }
        
        operacao(false, function(){
            fail("Não deve exetutar função de  callback");
        })


    });

 });