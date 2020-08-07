/** toEqual
 *  #Realiza a comparação de dois elementos de modo muito similar ao 'toBe'
 *  #A única diferença em relação ao 'toBe' é que ele não compara o tipo do objeto, somente seu valor
 *  #É recomendado seu uso para comparação devalores literais
 * 
 */

describe("Teste do toEqual", function() {

    it("Deve validar o uso de toEqual", function() {
        var obj1 = { valor: true };
        var obj2 = { valor: true };

        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    });

});