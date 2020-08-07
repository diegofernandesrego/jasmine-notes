/** 
 * toMatch
 * 
 *  #Realiza a comparação utilizado expressões regulares
 *  #Caso seja passada uma string como parâmetro,
 * o comparador tentará encontrar o texto passado dentro do valor a ser comparador
 */


describe("Comparador toMatch", function() {

    it("deve validar o uso do toMatch", function() {
        var texto = "teste com Jasmine";

        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/Jasmine/i);
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    })

})