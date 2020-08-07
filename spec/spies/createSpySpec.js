/**
 * 
 * createSpy
 * 
 * createSpy é uma função global do javascript do jasmine
 * 
 * Serve para criar um spy do zero
 * 
 * Ele possui todos os atributos de um objeto spy comum
 * 
 * Recebe como parâmetro o nome da função a ser criado o spy
 * 
 * Deve ser ultilizado quando precisa de um objeto que não ser tem acesso direto a ele 
 * 
 * CreateSpy possui a limitação de nao permitir o método declarado, assim como somente permite a criação de um método
 * 
 */

 describe("Teste do objeto jasmine.createSpy", function(){

    var somar;

    beforeAll(function(){
        somar = jasmine.createSpy("somar");
    });

    it("Deve demostrar o uso do jasmine.createSpy", function(){
        somar(1,2);
        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1,2);
        expect(somar.calls.mostRecent().args[0]).toEqual(1) ;
    })

 });
