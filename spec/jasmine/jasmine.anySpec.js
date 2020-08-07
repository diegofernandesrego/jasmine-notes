/**
 * 
 * jasmine.any
 * 
 * O jasmine.any serve pra verificar se um valor é de um determinado tipo
 * 
 * Pode ser usado para comparar valores reais ou valores utilizado em spies
 * 
 * Em spies é muito útil quando deseja verificar se um método foi chamado com um argumento de determinado tipo,
 * sem se importar com seu valor real
 */
describe("Teste do objeto jasmine.any", function(){

    var dobro;

    beforeAll(function(){
        dobro = jasmine.createSpy("dobro");
    });

    it("deve demostrar o uso do jamine.any", function(){
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    } );
});