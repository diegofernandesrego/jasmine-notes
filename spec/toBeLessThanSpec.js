/**
 *  toBeLessThan
 * 
 *  #Compara se um valor é menor do que outro valor
 *  #Realiza a conversão para valor numérico antes da comparação, podendo o valor ser passado em formato texto
 *  #Prefira usar toBeGreaterThan ao invés de not.toBeLessThan, para deixar o código de mais fácil compreensão
 *  #Para valores iguais utilize o toEqual 
 * 
 */

 describe("Teste do toBeLessThan", function(){

    it("Deve demostrar o uso do toBeLessThan", function(){
        var PI = 3.1415;

        expect(3).toBeLessThan(PI);
        
        expect(3.5).not.toBeLessThan(PI);

    })

 });