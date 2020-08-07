/**
 * Desabilitar testes
 * 
 * Assim como suítes, os testes também podem ser desabilitados ao renomear a função "it" por "xit"
 * 
 * Os testes também serão considerados inativos caso só possuam a descrição com argumento
 * 
 * Por último é possivel usar a função "penging" dentro do teste para inativá-lo
 * 
 */

describe("Desabilitando teste", function(){

    var contador = 0;

    beforeEach(function(){
        contador++;
    });

    it("Deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(5454);
        pending("implementar...");
    });

    xit("Deve exibir o contador com valor 2", function(){
        expect(contador).toEqual(2);
    });

    it("Teste desabilitado por não possuir função definida");

})