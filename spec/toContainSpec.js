/**
 *  toContain
 * 
 *  #Realiza a busca por determinado intem em um array
 *  #Também pode ser utilizado para buscar uma subString dentro de uma string
 *  #Não suporta buscar por expressões regulares
 * 
 */

 describe("Teste do toContain", function(){

    it("Deve demostrar o uso do toContain", function(){
        var texto = "Meu nome é Diego Fernandes do Rêgo";
        var frutas  = ["laranja", "banana", "pera"];

        expect(texto).toContain("Diego");
        expect(texto).not.toContain("diego");
        expect(texto).not.toContain("Silva");

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");

    })

 });