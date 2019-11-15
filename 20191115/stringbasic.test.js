import { exportAllDeclaration } from "@babel/types";

function stringbasic(s) {
    var temp = parseInt(s);
     if(s==temp){
       return true;
     }
     return false;
   }

   test('stringbasic',() =>{
       expect(stringbasic('a234')).toBe(false);
       expect(stringbasic('1234')).toBe(true);
   })