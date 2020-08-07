/**
 * toBeNull
 * 
 *  #Realiza a comparação de um objeto como sendo NULL
 *  #Usamos null para dizer que uma variável nao possui um valor
 *  #O valor null se difencia de undefined pelo fato de null ser um tipo e 
 * undefined ser uma variável ainda nao definida
 */
describe("Teste do toBeNull", function(){
    it("deve demostrar o uso do toBeNull", function(){
        
        var n1 = null;
        var n2 = undefined;
        var n3;
        var n4 = NaN;
        var n5 = "teste";

        expect(n1).toBeNull();
        
        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
        expect(n4).not.toBeNull();
        expect(n5).not.toBeNull();
    })
})