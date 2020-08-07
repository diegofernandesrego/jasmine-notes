/**
 * 
 * jasmine.anything
 * 
 * O jasmine.anything serve para verificar se um objeto ou variável é diferente de null ou undefined
 * 
 * Ele é muito similar ao jasmine.any, com a diferença que que ele não verifica o tipo do objeto ou variável
 * 
 * Pode ser utilizado em spies para certificar que um valor foi passado como parâmetro
 * 
 */
describe("Teste do objeto jasmine.anything", function(){

    var dobro;

    beforeAll(function(){
        dobro = jasmine.createSpy("dobro");
    });

    it("deve demostrar o uso do jamine.anything", function(){
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
        expect({}).toEqual(jasmine.anything());
    } );
});