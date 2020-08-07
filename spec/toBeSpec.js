/**
 *  # Reliza a comparação com o operador '===', que compara o valor e também o tipo de objeto
 *  # Deve ser ultilizado para comparar valores de forma mais efetiva 
 * pelo fato de também verificar o tipo do objeto
 * 
 */


describe("Comparador toBE", function() {

    it("deve validar o uso do toBe", function() {

        var obj1 = { valor: true };
        var obj2 = { valor: true };

        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        expect(obj1).not.toBe(obj2);

    });

});