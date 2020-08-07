/**
 * toBeFalsy
 * 
 *  #Realiza uma comparação dizendo se uma variável ou objeto possuir um valor invalido
 *  #Um valor será considerado inválido caso seje false, 0, '', undefined, null ou NaN
 *  #Deve ser utilizado quando a verificação abordar valores inválidos distintos,
 * baseados nas opções citadas acima
 *  #Prefira usar toBeTruthy ao invés de not.toBeFalsy, para deixar o código de mais fácil compreensão
 * 
 */

describe("Teste do toFalsy", function(){
    it("deve demostrar o uso do toBeFalsy", function(){
       
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(false).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();
        
    })
})

