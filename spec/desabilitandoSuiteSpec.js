/**
 * Dedabilitando suítes
 * 
 * Uma suíte pode ser desabilitada a qualquer momento renomeando a função "describe" para "xdescriber"
 * 
 * 
 * Todos os testes contidos dentro da suíte desabilitanda serão ignorados e não serão exibidos no relatório de execução
 * 
 * 
 */

xdescribe("Desabilitando Suite", function(){

    var contador = 0;

    beforeEach(function(){
        contador++;
    });

    it("Deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(14);
    })

    it("Deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(15);
    })

})