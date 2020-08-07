/**
 * beforeEach
 * 
 * Função Javascript global do Jasmine que é executada antes de cada teste
 * 
 * Pode ser executada antes de cada teste, serve para inicializar ou reinicializar um status 
 * 
 * Pode também executar uma ação antes de cada teste.
 * 
 * Tomar um certo cuidado porque ele não executa na ordem
 */

describe("Teste de beforeEach", function(){

    var contador = 0;

    beforeEach(function(){
        contador++;
    });

    it("Deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(1);
    })

    xit("Deve exibir o contador com valor 2", function(){
        expect(contador).toEqual(2);
        pending("Desabilitada por conta da ordem de execução");
    })

})