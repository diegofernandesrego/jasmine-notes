/**
 * Aninhando suítes
 * 
 * Suítes podem ser aninhadas e conter outras suites dentro delas
 * 
 * As funções especiais como o 'befereEach' ou 'afterAll' serão executadas 
 * antes e depois de todos os testes, em ordem
 * 
 * Tome cuidado ao aninhar suítes para não totnar o teste complexo e de difícill compreensão
 * 
 */

describe("Suite externa", function(){

    var contadorExterno = 0;

    beforeEach(function(){
        contadorExterno++;
    });

    it("Deve conter 1 para contadorExterno", function(){
        expect(contadorExterno).toEqual(1);
        pending("Desabilitada por conta da ordem de execução");
    });

    describe("Suite interna", function(){

        var contadorInterno = 0;

        beforeEach(function(){
            contadorInterno++;
        });

        it("Deve validar o valor dos contadores", function(){
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
            pending("Desabilitada por conta da ordem de execução");
            
        });
    });

});