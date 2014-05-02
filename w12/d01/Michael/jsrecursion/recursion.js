function loopFactorial(n){
  var product = 1;
  for(var i = 1; i <= n; i++){
    product *= i;
  }
  return product;
}

function recFactorial(n){
  if (n === 1){
    return 1;
  }
  else {
    return n * recFactorial(n-1);
  }
}

console.log(loopFactorial(5));
console.log(recFactorial(5));

// Doesn't work: 
function loopFib(n){
  var fibArray = [1,1,2]
  for( var i=2; i <=n; i++){
    if(n>=2){
      fibArray.push(fibArray[n-3] + fibArray[n-2])  
    };
  }
  return fibArray[n-1] 
}

// option b: 
// function loopFib(n) {
//   var previous = 1; 
//   var result = 0; 
//   for (var i =1; i<=n; i++){
//     result = result + previous; 
//     previous = result - previous; 
//   }
//   return result; 
// }



function recFib(n){
  if (n ===0){
    return 0; 
  }
  else if(n ===1){
    return 1; 
  }
  else {
    return recFib(n-1) + recFib(n-2)
  }
}; 