// step 1:  Turn digits into 16 place array
// step 2:  Double everyother Digit
// step 3:  Separate out the digits
// step 4:  Add all the digits
// step 5:  Divide by 10 to determine remainder


var luhn = function(creditcard){
  var ccArray = createArray(creditcard)
  var ccDouble = doubleEveryOther(ccArray)
  var ccDigitSum = sumAllDigits(ccDouble)

  if(ccDigitSum % 10 === 0){
    return true
  }
  else{
    return false
  } 
}

var createArray = function(creditcard){
  ccArray = new Array 
  for (i=0; i<creditcard.length; i++){
    if(creditcard[i]!=" "){
      ccArray.push(parseInt( creditcard[i]) )  
    }
  }
  return ccArray
}

var doubleEveryOther = function(ccArray){  
  for (i=0; i<ccArray.length; i = i+2){
    ccArray[i] = ccArray[i]*2
  }
  return ccArray
}

var sumAllDigits = function(ccDouble){
  var allJoin = ccDouble.join("")
  var allDigits = allJoin.split("")
  var allDigitsSum = 0
  for (i=0; i<allDigits.length; i++){
    allDigitsSum+=parseInt(allDigits[i])
  }
  return allDigitsSum
}