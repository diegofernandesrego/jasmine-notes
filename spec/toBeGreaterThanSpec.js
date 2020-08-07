/**
 *  toBeGeaterThan
 * 
 *  #Compara se um valor é maior do que outro valor
 *  #Realiza a conversão para valor numérico antes da comparação, podendo o valor ser passado em formato texto
 *  #Prefira usar toBeGreaterThan ao invés de not.toBeLessThan, para deixar o código de mais fácil compreensão
 *  #Para valores iguais utilize o toEqual 
 * 
 */

describe("Teste do toBeGreaterThan", function(){

    it("Deve demostrar o uso do toBeGreaterThan", function(){
        var PI = 3.1415;

        expect(4).toBeGreaterThan(PI);
        expect("5").toBeGreaterThan(PI);
        
        expect(3).not.toBeGreaterThan(PI);

    })

 });