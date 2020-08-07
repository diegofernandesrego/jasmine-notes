/**
 * 
 * Serve para tornar síncrono as chamadas do "setTimeout" e "setInterval"
 * 
 * Deve ser instalado antes da chamada com "jasmine.clock().install"
 * 
 * Deve ser removido ao término do teste/ suíte com "jasmnie.clock().uninstall"
 * 
 * Executa a operação de chamada com "jasmine.clock().tick, recebendo como parâmetro o número de milissegundos"
 */

describe("Teste do objeto jasmine.clock", function(){

    beforeEach(function(){
       jasmine.clock().install();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });


    var dobro;

    beforeAll(function(){
        dobro = jasmine.createSpy("dobro");
    });


    it("deve demostrar o uso do setTimeout", function(){
      setTimeout(function(){ dobro(10); }, 1000);
      jasmine.clock().tick(1000);
      expect(dobro).toHaveBeenCalled();
    });

    it("deve demostrar o uso com o setInterval", function(){
        setInterval(function(){ dobro(2); }, 1000);
        jasmine.clock().tick();
        expect(dobro).toHaveBeenCalled();
    })

 });