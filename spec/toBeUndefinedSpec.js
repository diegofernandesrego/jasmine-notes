/**
 * toBeUndefined
 *  
 *  #Realiza a comparação de uma como sendo undefined
 *  #Prefira usar toBeDefined ao invés de not.toBeUndefined para deixar o código de mais compreensão 
 * 
 */
1
 describe("Teste do toBeUndefined", function(){
     it("deve demostrar o uso do toBeUndefined", function(){
         var n1;
         var n2 = undefined;
         var n3 = false;

         expect(n1).toBeUndefined();
         expect(n2).toBeUndefined();

         expect(n3).not.toBeUndefined();
         expect(null).not.toBeUndefined();
     })
 })