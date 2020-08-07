/**
 * 
 * createSpyObj
 * 
 * createSpyObj é uma função global do javascript do jasmine
 * 
 * Serve para criar um objeto spy do zero
 * 
 * Ele possui todos os atributos de um objeto spy comum
 * 
 * Recebe como parâmetro o nome do objeto  a ser criado, assim como seus métodos em formato de array
 * 
 * Deve ser ultilizado quando precisa de um objeto que não ser tem acesso direto a ele 
 * 
 * CreateSpyObj permite a ultilização de todos os elementos 'and.' estudados anteriormente.
 * 
 */

describe("Teste do objeto jasmine.createSpyObj", function(){

    var Calculadora;

    beforeAll(function(){
        Calculadora = jasmine.createSpyObj("Calculadora", ["somar", "subtrair"]);

        Calculadora.somar.and.returnValue(5);
    });

    it("Deve demostrar o uso do jasmine.createSpyObj", function(){
        expect(Calculadora.somar(1,2)).toEqual(5);
        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
        expect(Calculadora.somar.calls.mostRecent().args[0]).toEqual(1);
    })

 });
