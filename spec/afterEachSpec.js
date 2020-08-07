/**
 * afterEach
 * 
 * Função Javascript global do jasmine que é executada depois de cada teste
 * 
 * Por ser executada depois de cada teste, serve para reiniciar um status
 * 
 * Pode também executar uma ação depois de cada teste
 * 
 */

 describe("Teste do afterEach", function(){

        var contador = 0;

        beforeEach(function(){
            contador++;
        });

        afterEach(function(){
            contador = 0;
        });
    
        it("deve garantir o valor 1 para o contador", function(){
            expect(contador).toEqual(1);
        });

        it("deve ainda garantir o valor 1 para o contador", function(){
            expect(contador).toEqual(1);
        });
        


 });