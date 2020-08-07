/**
 * 
 * O jasmine.stringMatching serve para verificar por uma porção de texto dentro de uma string
 * 
 * Ele suporta o uso de expressões regulares 
 * 
 * Também pode ser ultilizado com spies
 * 
 * Recebe como parâmetro a porção de texto ou expressaãoo regular utilizada no teste
 */

 describe("Teste do objeto jasmine.stringMatching", function(){

    beforeAll(function(){
        exibirTexto = jasmine.createSpy("exibirTexto");
    });

    it("deve demostrar o uso do jasmine.stringMatching", function(){
        exibirTexto("Curso de Jasmine");

        expect(exibirTexto).toHaveBeenCalledWith( jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith( jasmine.stringMatching(/jasmine/i));
        expect("Curso de Javascript").toEqual( jasmine.stringMatching("Javascript"));

    })

 });