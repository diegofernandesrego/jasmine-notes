/**
 * beforeAll
 * 
 * Funçao Javascript global do Jasmine que é executada uma única vez antes da execução dos testes
 * 
 * Por se executada antes de todos os teste, serve para inicializar um status, criar objetos
 * 
 */

 describe("Teste do beforeAll", function(){

    var contador = 0;

    beforeAll(function(){
        contador = 10;
    });

    beforeEach(function(){
        contador++;
    });

    it("Deve garantir valor 11 para o contador", function(){
        expect(contador).toEqual(11);
    });

    // it("Deve garantir valor 12 para o contador", function(){
    //     expect(contador).toEqual(12);
    // })

 })