// https://projecteuler.net/problem=1
/*    Multiples of 3 and 5
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesThreeAndFive (num){
  var total = 0
  for(let i = 0; i < num; i++) {
    if(i % 3 === 0 || i % 5 === 0){
      total += i
    }
  }
  return total
  
}
function CreateInterface (num){
  var num = prompt('Informe um número: ');
  alert(num)
  console.log(multiplesThreeAndFive(num)) 
  CreateInterface.close()
 
}

export{CreateInterface}
