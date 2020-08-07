/**
 * 
 * jasmine.arrayContaining
 * 
 * O jasmine.objectContaining serve para verificar se determinados valores exitem em um array
 * 
 * Ele recebe como parâmetro um array com valores a serem verificados
 * 
 */
describe("Teste do objeto jasmine.arrayContaining", function(){

    var numeros;

    beforeAll(function(){
       numeros = [1,2,3,4,5];
    });

    it("deve demonstrar o uso de jasmine.arrayContaining", function(){
        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2,4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([6]));

    })
})