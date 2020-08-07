/**
 * afterAll
 * 
 * Função Javacript global do jasmine que é executada uma única vez depois da execução dos testes
 * 
 * Por ser executada despois de todos os testes, serve para limpar algum status global
 */


describe("Teste do afterAll", function(){

    var contador = 0;

    beforeAll(function(){
        contador = 10;
    });

    afterAll(function(){
        contador = 0;
    });

    it("Deve garantir valor 10 para o contador", function(){
        expect(contador).toEqual(10);
    });

    it("Deve garantir valor 10 para o contador", function(){
        expect(contador).toEqual(10);
    });

    console.log("contador ", contador);

 })