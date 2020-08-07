/**
 * 
 * jasmine.objectContaining
 * 
 * O jasmine.objectContaining serve para verificar se determinada entrada (chave ou valor existe e um objeto)
 * 
 * Ele recebe como parâmetro o bloco a ser verificado em um objeto
 * 
 */
describe("Teste do objeto jasmine.objectContaining", function(){

    var carro;

    beforeAll(function(){
        carro = {
            'ano': 2017
        };
    });

    it("deve demonstrar o uso de jasmine.objectContaining", function(){
        expect(carro).toEqual(jasmine.objectContaining({'ano': 2017}));
        expect(carro).not.toEqual(jasmine.objectContaining({'cor':2018}));
    })
})